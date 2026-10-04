import { X, BellRing } from 'lucide-react'

export default function NotificationPanel({ isOpen, notifications, onClose, onMarkRead }) {
  if (!isOpen) return null

  return (
    <div className="notification-overlay" role="dialog" aria-modal="true">
      <div className="notification-panel">
        <div className="notification-header">
          <div className="notification-title-group">
            <BellRing size={18} />
            <h3>Notifications</h3>
          </div>
          <button type="button" className="close-btn" onClick={onClose} aria-label="Close notifications">
            <X size={16} />
          </button>
        </div>

        <div className="notification-list">
          {notifications.map((item) => (
            <div key={item.id} className={`notification-item ${item.unread ? 'unread' : ''}`}>
              <div className="notification-dot" />
              <div className="notification-copy">
                <strong>{item.title}</strong>
                <small>{item.time}</small>
              </div>
              {!item.unread && (
                <button type="button" className="mark-read-btn" onClick={() => onMarkRead(item.id)}>
                  Read
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
