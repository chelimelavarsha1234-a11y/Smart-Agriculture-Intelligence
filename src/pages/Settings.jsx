import { useState } from 'react'

const initialSettings = {
  farmerName: 'Farmer Priya',
  location: 'Hyderabad',
  farmSize: '12 acres',
  preferredCrop: 'Rice',
  language: 'English',
  tempUnit: 'Celsius',
  diseaseAlerts: true,
  weatherAlerts: true,
  irrigationReminders: true,
  fertilizerReminders: true,
}

export default function Settings() {
  const [form, setForm] = useState(initialSettings)
  const [saved, setSaved] = useState(false)

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target
    setForm((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSave = (event) => {
    event.preventDefault()
    setSaved(true)
    window.setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div className="page-shell">
      <div className="page-header">
        <span className="eyebrow">AGRICULTURE INTELLIGENCE</span>
        <h1>Settings</h1>
      </div>

      <section className="card settings-card">
        <form onSubmit={handleSave} className="settings-form">
          <div className="settings-section">
            <h3>PROFILE</h3>
            <div className="field-grid">
              <label>
                <span>Farmer name</span>
                <input name="farmerName" value={form.farmerName} onChange={handleChange} />
              </label>
              <label>
                <span>Location</span>
                <input name="location" value={form.location} onChange={handleChange} />
              </label>
              <label>
                <span>Farm size</span>
                <input name="farmSize" value={form.farmSize} onChange={handleChange} />
              </label>
            </div>
          </div>

          <div className="settings-section">
            <h3>PREFERENCES</h3>
            <div className="field-grid">
              <label>
                <span>Preferred crop</span>
                <select name="preferredCrop" value={form.preferredCrop} onChange={handleChange}>
                  <option value="Rice">Rice</option>
                  <option value="Wheat">Wheat</option>
                  <option value="Tomato">Tomato</option>
                  <option value="Cotton">Cotton</option>
                </select>
              </label>
              <label>
                <span>Language</span>
                <select name="language" value={form.language} onChange={handleChange}>
                  <option value="English">English</option>
                  <option value="Hindi">Hindi</option>
                  <option value="Telugu">Telugu</option>
                </select>
              </label>
              <label>
                <span>Temperature unit</span>
                <select name="tempUnit" value={form.tempUnit} onChange={handleChange}>
                  <option value="Celsius">Celsius</option>
                  <option value="Fahrenheit">Fahrenheit</option>
                </select>
              </label>
            </div>
          </div>

          <div className="settings-section">
            <h3>NOTIFICATIONS</h3>
            <div className="checkbox-grid">
              <label><input type="checkbox" name="diseaseAlerts" checked={form.diseaseAlerts} onChange={handleChange} /> Disease alerts</label>
              <label><input type="checkbox" name="weatherAlerts" checked={form.weatherAlerts} onChange={handleChange} /> Weather alerts</label>
              <label><input type="checkbox" name="irrigationReminders" checked={form.irrigationReminders} onChange={handleChange} /> Irrigation reminders</label>
              <label><input type="checkbox" name="fertilizerReminders" checked={form.fertilizerReminders} onChange={handleChange} /> Fertilizer reminders</label>
            </div>
          </div>

          <button type="submit" className="primary-btn">Save Settings</button>
          {saved && <div className="success-message">Settings saved successfully.</div>}
        </form>
      </section>
    </div>
  )
}
