import { Send } from 'lucide-react'

export default function ChatInput({ value, onChange, onSubmit, placeholder }) {
  return (
    <form className="chat-form" onSubmit={onSubmit}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        aria-label="Chat question"
      />
      <button type="submit" className="primary-btn">
        <Send size={16} />
        <span>Send</span>
      </button>
    </form>
  )
}
