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
    if (open && inputRef.current) inputRef.current.focus()
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
      setMessages([...updated, { role: 'assistant', content: res.ok ? data.message : (data.error || 'Something went wrong.') }])
    } catch {
      setMessages([...updated, { role: 'assistant', content: 'Unable to connect. Please call (714) 336-8042.' }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-50 min-h-[56px] min-w-[56px] h-14 w-14 bg-olive-500 hover:bg-olive-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
          aria-label="Open chat assistant"
        >
          <MessageSquare size={24} />
        </button>
      )}

      {open && (
        <div className="fixed bottom-0 right-0 sm:bottom-6 sm:right-6 z-50 w-full sm:w-[400px] h-full sm:h-[540px] bg-white sm:rounded-xl shadow-2xl flex flex-col border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="bg-olive-500 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center">
                <MessageSquare size={18} className="text-white" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Dr. Woods&apos; Assistant</p>
                <p className="text-olive-100 text-xs">AI-powered practice assistant</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-white/80 hover:text-white hover:bg-white/10"
              aria-label="Close chat"
            >
              <X size={22} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.length === 0 && (
              <div className="space-y-3">
                <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%] shadow-sm">
                  <p className="text-gray-700 text-sm">
                    Hi! I&apos;m Dr. Woods&apos; virtual assistant. I can answer questions about our practice, services, and help you schedule a consultation. How can I help?
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['What services do you offer?', 'How do I schedule?', 'Do you accept insurance?'].map((q) => (
                    <button
                      type="button"
                      key={q}
                      onClick={() => setInput(q)}
                      className="min-h-[44px] text-left text-xs sm:text-sm bg-white hover:bg-olive-50 text-olive-600 px-4 py-2.5 rounded-full transition-colors border border-olive-200"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm whitespace-pre-wrap shadow-sm ${
                  msg.role === 'user'
                    ? 'bg-olive-500 text-white rounded-br-sm'
                    : 'bg-white text-gray-700 rounded-tl-sm'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm">
                  <div className="flex space-x-1.5">
                    <div className="w-2 h-2 bg-olive-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2 h-2 bg-olive-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 bg-olive-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Disclaimer */}
          <div className="px-4 py-1.5 bg-gray-100 border-t border-gray-200">
            <p className="text-gray-400 text-[10px] text-center">
              General practice info only. For medical concerns, call{' '}
              <a href="tel:+17143368042" className="text-olive-500 hover:underline">(714) 336-8042</a>
            </p>
          </div>

          {/* Input */}
          <div className="px-4 py-3 bg-white border-t border-gray-200">
            <div className="flex items-center space-x-2">
              <a
                href="tel:+17143368042"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-gray-400 hover:text-olive-500 hover:bg-gray-100 transition-colors"
                aria-label="Call office"
              >
                <Phone size={20} />
              </a>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Ask a question..."
                className="flex-1 min-h-[44px] bg-gray-100 text-gray-900 text-base sm:text-sm rounded-full px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-olive-500"
                maxLength={500}
              />
              <button
                type="button"
                onClick={sendMessage}
                disabled={!input.trim() || loading}
                className="h-11 w-11 shrink-0 bg-olive-500 hover:bg-olive-600 disabled:bg-gray-300 text-white rounded-full flex items-center justify-center transition-colors"
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
