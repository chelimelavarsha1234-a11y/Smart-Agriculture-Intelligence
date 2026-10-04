import { useState } from 'react'
import { cropOptions } from '../data/cropRecommendations'
import { getIrrigationRecommendation, irrigationSoilTypes, irrigationWeatherConditions } from '../data/irrigationRecommendations'

const initialForm = {
  crop: 'Tomato',
  soilType: 'Loamy',
  weatherCondition: 'Sunny',
  growthStage: 'Early growth',
}

export default function IrrigationTips() {
  const [form, setForm] = useState(initialForm)
  const [result, setResult] = useState(null)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setResult(getIrrigationRecommendation(form))
  }

  return (
    <div className="page-shell">
      <div className="page-header">
        <span className="eyebrow">AGRICULTURE INTELLIGENCE</span>
        <h1>Irrigation Tips</h1>
      </div>

      <section className="card form-card">
        <form onSubmit={handleSubmit} className="stacked-form">
          <div className="field-grid">
            <label>
              <span>Crop</span>
              <select name="crop" value={form.crop} onChange={handleChange}>
                {cropOptions.map((crop) => (
                  <option key={crop} value={crop}>{crop}</option>
                ))}
              </select>
            </label>

            <label>
              <span>Soil type</span>
              <select name="soilType" value={form.soilType} onChange={handleChange}>
                {irrigationSoilTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </label>

            <label>
              <span>Weather condition</span>
              <select name="weatherCondition" value={form.weatherCondition} onChange={handleChange}>
                {irrigationWeatherConditions.map((condition) => (
                  <option key={condition} value={condition}>{condition}</option>
                ))}
              </select>
            </label>

            <label>
              <span>Growth stage</span>
              <select name="growthStage" value={form.growthStage} onChange={handleChange}>
                <option value="Early growth">Early growth</option>
                <option value="Flowering">Flowering</option>
                <option value="Fruit setting">Fruit setting</option>
                <option value="Maturity">Maturity</option>
              </select>
            </label>
          </div>

          <button type="submit" className="primary-btn">Apply irrigation guidance</button>
        </form>
      </section>

      {result && (
        <section className="card result-card">
          <div className="small-heading">IRRIGATION SUMMARY</div>
          <div className="result-grid two-cols">
            <div>
              <span className="result-label">Recommended watering frequency</span>
              <strong>{result.waterFrequency}</strong>
            </div>
            <div>
              <span className="result-label">Estimated water requirement</span>
              <strong>{result.waterRequirement}</strong>
            </div>
            <div>
              <span className="result-label">Best irrigation time</span>
              <strong>{result.bestTime}</strong>
            </div>
            <div>
              <span className="result-label">Irrigation method</span>
              <strong>{result.method}</strong>
            </div>
            <div className="span-two">
              <span className="result-label">Water-saving tips</span>
              <strong>{result.tips}</strong>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
