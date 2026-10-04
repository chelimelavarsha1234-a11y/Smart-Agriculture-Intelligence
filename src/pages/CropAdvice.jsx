import { useMemo, useState } from 'react'
import RecommendationCard from '../components/RecommendationCard'
import { cropOptions, getCropRecommendation } from '../data/cropRecommendations'

export default function CropAdvice() {
  const [selectedCrop, setSelectedCrop] = useState('Rice')

  const recommendation = useMemo(() => getCropRecommendation(selectedCrop), [selectedCrop])

  return (
    <div className="page-shell">
      <div className="page-header">
        <span className="eyebrow">AGRICULTURE INTELLIGENCE</span>
        <h1>Crop Advice</h1>
      </div>

      <section className="card crop-advice-card">
        <h2>Simple care plans for your crop</h2>
        <div className="form-row">
          <label className="field-label" htmlFor="crop-select">Crop</label>
          <select id="crop-select" value={selectedCrop} onChange={(event) => setSelectedCrop(event.target.value)}>
            {cropOptions.map((crop) => (
              <option key={crop} value={crop}>{crop}</option>
            ))}
          </select>
        </div>

        <div className="recommendation-grid">
          <RecommendationCard label="FERTILIZER RECOMMENDATION" value={recommendation.fertilizer} />
          <RecommendationCard label="WATER SCHEDULE" value={recommendation.water} />
          <RecommendationCard label="SOIL TIPS" value={recommendation.soil} />
          <RecommendationCard label="HARVEST GUIDANCE" value={recommendation.harvest} />
        </div>
      </section>
    </div>
  )
}
