export default function ChatMessage({ sender, text }) {
  const isUser = sender === 'user'

  return (
    <div className={`chat-row ${isUser ? 'user' : 'ai'}`}>
      <div className={`chat-bubble ${isUser ? 'user-bubble' : 'ai-bubble'}`}>
        {text}
      </div>
    </div>
  )
}
