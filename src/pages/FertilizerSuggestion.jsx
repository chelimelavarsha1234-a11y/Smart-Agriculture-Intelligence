import { useState } from 'react'
import { cropOptions } from '../data/cropRecommendations'
import { fertilityLevels, getFertilizerRecommendation, growthStages, soilTypes } from '../data/fertilizerRecommendations'

const initialForm = {
  crop: 'Rice',
  soilType: 'Loamy',
  growthStage: 'Early growth',
  soilFertility: 'Moderate',
  fieldSize: '2 acres',
  previousFertilizer: 'Urea',
}

export default function FertilizerSuggestion() {
  const [form, setForm] = useState(initialForm)
  const [result, setResult] = useState(null)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const recommendation = getFertilizerRecommendation({
      crop: form.crop,
      soilType: form.soilType,
      stage: form.growthStage,
      fertility: form.soilFertility,
      fieldSize: form.fieldSize,
      previousFertilizer: form.previousFertilizer,
    })

    setResult(recommendation)
  }

  return (
    <div className="page-shell">
      <div className="page-header">
        <span className="eyebrow">AGRICULTURE INTELLIGENCE</span>
        <h1>Fertilizer Suggestion</h1>
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
                {soilTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </label>

            <label>
              <span>Growth stage</span>
              <select name="growthStage" value={form.growthStage} onChange={handleChange}>
                {growthStages.map((stage) => (
                  <option key={stage} value={stage}>{stage}</option>
                ))}
              </select>
            </label>

            <label>
              <span>Soil fertility</span>
              <select name="soilFertility" value={form.soilFertility} onChange={handleChange}>
                {fertilityLevels.map((level) => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </label>

            <label>
              <span>Field size</span>
              <input name="fieldSize" value={form.fieldSize} onChange={handleChange} />
            </label>

            <label>
              <span>Previous fertilizer used</span>
              <input name="previousFertilizer" value={form.previousFertilizer} onChange={handleChange} />
            </label>
          </div>

          <button type="submit" className="primary-btn">Get Fertilizer Recommendation</button>
        </form>
      </section>

      {result && (
        <section className="card result-card">
          <div className="small-heading">RECOMMENDATION</div>
          <div className="result-grid two-cols">
            <div>
              <span className="result-label">Crop</span>
              <strong>{result.crop}</strong>
            </div>
            <div>
              <span className="result-label">Recommended fertilizer</span>
              <strong>{result.recommendation}</strong>
            </div>
            <div>
              <span className="result-label">Suggested quantity</span>
              <strong>{result.quantity}</strong>
            </div>
            <div>
              <span className="result-label">Application method</span>
              <strong>{result.method}</strong>
            </div>
            <div>
              <span className="result-label">Application frequency</span>
              <strong>{result.frequency}</strong>
            </div>
            <div>
              <span className="result-label">Precautions</span>
              <strong>{result.precautions}</strong>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
