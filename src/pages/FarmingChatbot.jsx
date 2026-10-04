import { useState } from 'react'
import ChatInput from '../components/ChatInput'
import ChatMessage from '../components/ChatMessage'
import { chatbotExamples, getChatbotResponse } from '../data/chatbotResponses'

const initialMessages = [
  { sender: 'ai', text: 'Hello! Ask me anything about your crops, fertilizer, or watering.' },
]

export default function FarmingChatbot() {
  const [messages, setMessages] = useState(initialMessages)
  const [input, setInput] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!input.trim()) {
      setError('Please enter your farming question.')
      return
    }

    const question = input.trim()
    setMessages((current) => [...current, { sender: 'user', text: question }])
    setInput('')
    setError('')

    const answer = getChatbotResponse(question)
    window.setTimeout(() => {
      setMessages((current) => [...current, { sender: 'ai', text: answer }])
    }, 300)
  }

  return (
    <div className="page-shell">
      <div className="page-header">
        <span className="eyebrow">AGRICULTURE INTELLIGENCE</span>
        <h1>AI Farming Chatbot</h1>
      </div>

      <section className="card chatbot-card">
        <div className="small-heading">AI FARMING CHATBOT</div>
        <h2>Ask farming questions in simple language</h2>
        <p>
          Example: Why are my leaves yellow? Best fertilizer for rice? How much water for tomato plants?
        </p>

        <div className="chat-example-row">
          {chatbotExamples.map((example) => (
            <button key={example} type="button" className="example-pill" onClick={() => setInput(example)}>
              {example}
            </button>
          ))}
        </div>

        <div className="chat-window">
          {messages.map((message, index) => (
            <ChatMessage key={`${message.sender}-${index}`} sender={message.sender} text={message.text} />
          ))}
        </div>

        {error && <div className="error-message">{error}</div>}

        <ChatInput
          value={input}
          onChange={(event) => setInput(event.target.value)}
          onSubmit={handleSubmit}
          placeholder="Type your farming question..."
        />
      </section>
    </div>
  )
}
