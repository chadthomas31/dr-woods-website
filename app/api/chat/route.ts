import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'
import { practiceData } from '../../lib/practice-data'

const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimitMap.get(ip)

  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + 60_000 })
    return true
  }

  if (entry.count >= 5) return false
  entry.count++
  return true
}

const SYSTEM_PROMPT = `You are a helpful, warm, and professional virtual assistant for ${practiceData.doctor.name}'s concierge psychiatry practice.

PRACTICE INFORMATION:
${JSON.stringify(practiceData, null, 2)}

INSTRUCTIONS:
- Answer questions about Dr. Woods' services, scheduling, location, insurance, and general practice information.
- Be warm, empathetic, and professional — matching the tone of a premium healthcare practice.
- For scheduling requests, collect: preferred date/time, visit type (in-home, office, or telepsychiatry), and the patient's name and phone number. Once collected, confirm the details and let them know Dr. Woods' office will follow up to confirm.
- NEVER provide medical diagnoses, treatment recommendations, or medical advice.
- NEVER ask for or store protected health information (PHI) beyond name and phone number for scheduling.
- For medical emergencies, always direct to call 911 immediately.
- For non-emergency medical questions, direct them to call ${practiceData.doctor.phone} or email ${practiceData.doctor.email}.
- If you don't know an answer, say so and suggest contacting the office directly.
- Keep responses concise — 2-3 sentences when possible.`

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for') || 'unknown'
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again in a minute.' },
        { status: 429 }
      )
    }

    const { messages } = await request.json()

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: 'Messages are required.' }, { status: 400 })
    }

    if (messages.length > 20) {
      return NextResponse.json(
        { error: 'Conversation too long. Please start a new chat.' },
        { status: 400 }
      )
    }

    const apiKey = process.env.ANTHROPIC_API_KEY
    if (!apiKey) {
      return NextResponse.json(
        { error: 'AI assistant is not configured. Please call (714) 336-8042.' },
        { status: 500 }
      )
    }

    const client = new Anthropic({ apiKey })

    const response = await client.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 500,
      system: SYSTEM_PROMPT,
      messages: messages.map((m: { role: string; content: string }) => ({
        role: m.role as 'user' | 'assistant',
        content: m.content.slice(0, 1000),
      })),
    })

    const textBlock = response.content.find((block) => block.type === 'text')
    const message = textBlock ? textBlock.text : 'I apologize, I was unable to generate a response. Please call (714) 336-8042.'

    return NextResponse.json({ message })
  } catch {
    return NextResponse.json(
      { error: 'Something went wrong. Please call (714) 336-8042 for assistance.' },
      { status: 500 }
    )
  }
}
