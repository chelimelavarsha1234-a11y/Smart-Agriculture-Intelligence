import { NavLink } from 'react-router-dom'
import {
  Home,
  ShieldAlert,
  MessageSquareText,
  CloudSun,
  Sprout,
  FlaskConical,
  Droplets,
  Bug,
  Settings,
  X,
} from 'lucide-react'

const navItems = [
  { label: 'Dashboard Home', path: '/', icon: Home },
  { label: 'Crop Disease Detection', path: '/disease-detection', icon: ShieldAlert },
  { label: 'AI Farming Chatbot', path: '/chatbot', icon: MessageSquareText },
  { label: 'Weather Guidance', path: '/weather', icon: CloudSun },
  { label: 'Crop Advice', path: '/crop-advice', icon: Sprout },
  { label: 'Fertilizer Suggestion', path: '/fertilizer', icon: FlaskConical },
  { label: 'Irrigation Tips', path: '/irrigation', icon: Droplets },
  { label: 'Pest Detection', path: '/pest-detection', icon: Bug },
  { label: 'Settings', path: '/settings', icon: Settings },
]

export default function Sidebar({ isOpen, onClose }) {
  return (
    <aside className={`sidebar ${isOpen ? 'sidebar-open' : ''}`}>
      <div className="sidebar-header">
        <div className="logo-badge">SF</div>
        <div className="brand-block">
          <h2>Smart Agriculture Intelligence</h2>
          <span>Dashboard</span>
        </div>
        <button type="button" className="close-btn" onClick={onClose} aria-label="Close sidebar">
          <X size={16} />
        </button>
      </div>

      <nav className="sidebar-nav" aria-label="Sidebar navigation">
        {navItems.map(({ label, path, icon: Icon }) => (
          <NavLink
            key={label}
            to={path}
            end={path === '/'}
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
            onClick={onClose}
          >
            <span className="nav-icon"><Icon size={15} /></span>
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
