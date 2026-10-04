import { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import NotificationPanel from './components/NotificationPanel'
import Dashboard from './pages/Dashboard'
import DiseaseDetection from './pages/DiseaseDetection'
import FarmingChatbot from './pages/FarmingChatbot'
import WeatherGuidance from './pages/WeatherGuidance'
import CropAdvice from './pages/CropAdvice'
import FertilizerSuggestion from './pages/FertilizerSuggestion'
import IrrigationTips from './pages/IrrigationTips'
import PestDetection from './pages/PestDetection'
import Settings from './pages/Settings'
import { notifications as initialNotifications } from './data/notifications'

function AppLayout() {
  const [notifications, setNotifications] = useState(initialNotifications)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
  const [notificationOpen, setNotificationOpen] = useState(false)

  const unreadCount = notifications.filter((item) => item.unread).length

  const handleMarkRead = (id) => {
    setNotifications((current) =>
      current.map((item) => (item.id === id ? { ...item, unread: false } : item)),
    )
  }

  return (
    <div className="app-shell">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main className="main-content">
        <Header
          notificationsCount={unreadCount}
          onToggleNotifications={() => {
            setNotificationOpen((open) => !open)
            setProfileOpen(false)
          }}
          isProfileOpen={profileOpen}
          onToggleProfile={() => {
            setProfileOpen((open) => !open)
            setNotificationOpen(false)
          }}
          onCloseProfile={() => setProfileOpen(false)}
          onToggleSidebar={() => setSidebarOpen((open) => !open)}
        />

        <NotificationPanel
          isOpen={notificationOpen}
          notifications={notifications}
          onClose={() => setNotificationOpen(false)}
          onMarkRead={handleMarkRead}
        />

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/disease-detection" element={<DiseaseDetection />} />
          <Route path="/chatbot" element={<FarmingChatbot />} />
          <Route path="/weather" element={<WeatherGuidance />} />
          <Route path="/crop-advice" element={<CropAdvice />} />
          <Route path="/fertilizer" element={<FertilizerSuggestion />} />
          <Route path="/irrigation" element={<IrrigationTips />} />
          <Route path="/pest-detection" element={<PestDetection />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  )
}
