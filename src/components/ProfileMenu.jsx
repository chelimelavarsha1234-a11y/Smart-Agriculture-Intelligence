import { UserRound, Settings as SettingsIcon, LogOut } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function ProfileMenu({ isOpen, onClose, onOpenSettings }) {
  const navigate = useNavigate()

  if (!isOpen) return null

  const handleAction = (path) => {
    onClose()
    navigate(path)
    if (path === '/settings') {
      onOpenSettings?.()
    }
  }

  return (
    <div className="profile-menu" role="menu">
      <button type="button" className="profile-menu-item" onClick={() => handleAction('/settings')}>
        <UserRound size={15} />
        <span>Profile</span>
      </button>
      <button type="button" className="profile-menu-item" onClick={() => handleAction('/settings')}>
        <SettingsIcon size={15} />
        <span>Settings</span>
      </button>
      <button type="button" className="profile-menu-item" onClick={onClose}>
        <LogOut size={15} />
        <span>Logout</span>
      </button>
    </div>
  )
}
