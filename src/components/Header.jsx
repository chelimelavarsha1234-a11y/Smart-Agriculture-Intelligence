import { Bell, ChevronDown, UserCircle2 } from 'lucide-react'
import ProfileMenu from './ProfileMenu'

export default function Header({
  notificationsCount,
  onToggleNotifications,
  isProfileOpen,
  onToggleProfile,
  onCloseProfile,
  onToggleSidebar,
}) {
  return (
    <header className="topbar">
      <div className="topbar-left">
        <button type="button" className="mobile-menu-trigger" onClick={onToggleSidebar} aria-label="Open menu">
          ☰
        </button>
      </div>

      <div className="topbar-actions">
        <button type="button" className="notification-btn" onClick={onToggleNotifications} aria-label="Open notifications">
          <Bell size={18} />
          {notificationsCount > 0 && <span className="notification-badge">{notificationsCount}</span>}
        </button>

        <div className="profile-box">
          <button type="button" className="profile-trigger" onClick={onToggleProfile}>
            <span className="profile-avatar"><UserCircle2 size={18} /></span>
            <span className="profile-meta">
              <strong>Farmer Priya</strong>
              <small>Local field manager</small>
            </span>
            <ChevronDown size={16} />
          </button>

          <ProfileMenu isOpen={isProfileOpen} onClose={onCloseProfile} />
        </div>
      </div>
    </header>
  )
}
