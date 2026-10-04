import { useNavigate } from 'react-router-dom'
import StatCard from '../components/StatCard'

const stats = [
  { title: 'FIELDS MONITORED', value: '128', description: 'Active sensors and crop zones' },
  { title: 'DISEASE ALERTS', value: '24', description: 'Detected in the last 48 hours' },
  { title: 'WATER ADVICE', value: '42%', description: 'Irrigation efficiency improved' },
  { title: 'CROP HEALTH', value: '87%', description: 'Average plant health score' },
]

export default function Dashboard() {
  const navigate = useNavigate()

  return (
    <div className="page-shell">
      <div className="page-header">
        <span className="eyebrow">AGRICULTURE INTELLIGENCE</span>
        <h1>Dashboard Home</h1>
      </div>

      <div className="stats-grid">
        {stats.map((stat) => (
          <StatCard key={stat.title} title={stat.title} value={stat.value} description={stat.description} />
        ))}
      </div>

      <div className="dashboard-grid">
        <section className="card welcome-card">
          <h3>WELCOME TO YOUR FARM DASHBOARD</h3>
          <h2>Monitor crops, weather, and harvest readiness in one place.</h2>
          <p>
            Use the sidebar to switch between crop disease detection, AI farming advice, weather guidance,
            and crop-specific recommendations. The dashboard is designed for responsive mobile and desktop use.
          </p>
        </section>

        <section className="card quick-actions-card">
          <h3>QUICK ACTIONS</h3>

          <button type="button" className="action-card" onClick={() => navigate('/disease-detection')}>
            <strong>Upload leaf image</strong>
            <span>Detect crop disease with one click.</span>
          </button>

          <button type="button" className="action-card" onClick={() => navigate('/chatbot')}>
            <strong>Ask AI chatbot</strong>
            <span>Get easy farming advice anytime.</span>
          </button>
        </section>
      </div>
    </div>
  )
}
