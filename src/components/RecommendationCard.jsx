export default function RecommendationCard({ label, value }) {
  return (
    <div className="recommendation-card">
      <span className="result-label">{label}</span>
      <p>{value}</p>
    </div>
  )
}
