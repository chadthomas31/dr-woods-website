'use client'

import { useState, useRef, useEffect } from 'react'
import { MessageSquare, X, Send, Phone } from 'lucide-react'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

export default function AIChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus()
    }
  }, [open])

  const sendMessage = async () => {
    const text = input.trim()
    if (!text || loading) return

    const userMessage: Message = { role: 'user', content: text }
    const updated = [...messages, userMessage]
    setMessages(updated)
    setInput('')
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: updated }),
      })

      const data = await res.json()

      if (res.ok) {
        setMessages([...updated, { role: 'assistant', content: data.message }])
      } else {
        setMessages([
          ...updated,
          { role: 'assistant', content: data.error || 'Something went wrong. Please try again.' },
        ])
      }
    } catch {
      setMessages([
        ...updated,
        { role: 'assistant', content: 'Unable to connect. Please call (714) 336-8042.' },
      ])
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gold-400 hover:bg-gold-500 text-black rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
          aria-label="Open chat assistant"
        >
          <MessageSquare size={28} />
        </button>
      )}

      {open && (
        <div className="fixed bottom-0 right-0 sm:bottom-6 sm:right-6 z-50 w-full sm:w-[400px] h-full sm:h-[560px] bg-zinc-900 sm:rounded-lg shadow-2xl flex flex-col border border-gold-700/40 overflow-hidden">
          {/* Header */}
          <div className="bg-black px-4 py-3 flex items-center justify-between border-b border-gold-700/40">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gold-400 rounded-full flex items-center justify-center">
                <MessageSquare size={20} className="text-black" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Dr. Woods&apos; Assistant</p>
                <p className="text-gray-400 text-xs">AI-powered practice assistant</p>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="text-gray-400 hover:text-gold-400" aria-label="Close chat">
              <X size={22} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.length === 0 && (
              <div className="space-y-3">
                <div className="bg-zinc-800 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%]">
                  <p className="text-gray-100 text-sm">
                    Hi! I&apos;m Dr. Woods&apos; virtual assistant. I can answer questions about our practice, services, and help you schedule a consultation. How can I help?
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['What services do you offer?', 'How do I schedule?', 'Do you accept insurance?'].map((q) => (
                    <button
                      key={q}
                      onClick={() => { setInput(q); }}
                      className="text-xs bg-zinc-800 hover:bg-zinc-700 text-gold-400 px-3 py-1.5 rounded-full transition-colors border border-gold-700/30"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm whitespace-pre-wrap ${
                    msg.role === 'user'
                      ? 'bg-gold-400 text-black rounded-br-sm'
                      : 'bg-zinc-800 text-gray-100 rounded-tl-sm'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="bg-zinc-800 rounded-2xl rounded-tl-sm px-4 py-3">
                  <div className="flex space-x-1.5">
                    <div className="w-2 h-2 bg-gold-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2 h-2 bg-gold-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 bg-gold-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Disclaimer */}
          <div className="px-4 py-1.5 bg-black/50 border-t border-gold-700/30">
            <p className="text-gray-500 text-[10px] text-center">
              General practice info only. For medical concerns, call{' '}
              <a href="tel:+17143368042" className="text-gold-400 hover:underline">(714) 336-8042</a>
            </p>
          </div>

          {/* Input */}
          <div className="px-4 py-3 bg-black border-t border-gold-700/40">
            <div className="flex items-center space-x-2">
              <a href="tel:+17143368042" className="text-gray-400 hover:text-gold-400 transition-colors" aria-label="Call office">
                <Phone size={20} />
              </a>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Ask a question..."
                className="flex-1 bg-zinc-800 text-white text-sm rounded-full px-4 py-2.5 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold-400 border border-gold-700/30"
                maxLength={500}
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim() || loading}
                className="w-10 h-10 bg-gold-400 hover:bg-gold-500 disabled:bg-zinc-700 text-black rounded-full flex items-center justify-center transition-colors"
                aria-label="Send message"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
