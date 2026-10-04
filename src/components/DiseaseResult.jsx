export default function DiseaseResult({ result, emptyMessage = 'No result yet. Upload an image and click Detect Disease to view the report.' }) {
  if (!result) {
    return <div className="result-empty">{emptyMessage}</div>
  }

  return (
    <div className="result-panel">
      <div className="result-grid">
        <div>
          <span className="result-label">Disease</span>
          <strong>{result.disease}</strong>
        </div>
        <div>
          <span className="result-label">Confidence</span>
          <strong>{result.confidence}%</strong>
        </div>
        <div>
          <span className="result-label">Severity</span>
          <strong>{result.severity}</strong>
        </div>
      </div>

      <div className="result-section">
        <span className="result-label">Treatment</span>
        <p>{result.treatment}</p>
      </div>

      <div className="result-section">
        <span className="result-label">Prevention</span>
        <p>{result.prevention}</p>
      </div>

      <div className="result-section">
        <span className="result-label">Explanation</span>
        <p>{result.explanation}</p>
      </div>
    </div>
  )
}
