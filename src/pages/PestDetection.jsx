import { useState } from 'react'
import FileUploader from '../components/FileUploader'
import { simulatePestPrediction } from '../data/pestInformation'

export default function PestDetection() {
  const [selectedFile, setSelectedFile] = useState(null)
  const [previewUrl, setPreviewUrl] = useState('')
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')
  const [isDetecting, setIsDetecting] = useState(false)

  const handleFileChange = (event) => {
    const file = event.target.files?.[0]
    if (!file) return

    const imageUrl = URL.createObjectURL(file)
    setSelectedFile(file)
    setPreviewUrl(imageUrl)
    setError('')
    setResult(null)
  }

  const handleDetect = () => {
    if (!selectedFile) {
      setError('Please upload a leaf or pest image first.')
      setResult(null)
      return
    }

    setError('')
    setIsDetecting(true)

    window.setTimeout(() => {
      setResult(simulatePestPrediction(selectedFile.name))
      setIsDetecting(false)
    }, 1000)
  }

  const handleClear = () => {
    setSelectedFile(null)
    setPreviewUrl('')
    setResult(null)
    setError('')
  }

  return (
    <div className="page-shell">
      <div className="page-header">
        <span className="eyebrow">AGRICULTURE INTELLIGENCE</span>
        <h1>Pest Detection</h1>
      </div>

      <div className="two-column-layout">
        <section className="card info-card large-card">
          <div className="small-heading">PEST IDENTIFICATION</div>
          <h2>Upload a plant or pest image</h2>
          <p>Upload a clear photo of the crop area and let the demo model help identify the likely pest issue.</p>

          <FileUploader
            label="Choose a plant image"
            accept=".jpg,.jpeg,.png,.webp,image/jpeg,image/png,image/webp"
            onFileSelect={handleFileChange}
            previewUrl={previewUrl}
            onClear={handleClear}
          />

          {error && <div className="error-message">{error}</div>}

          <button type="button" className="primary-btn" onClick={handleDetect} disabled={isDetecting}>
            {isDetecting ? 'Detecting...' : 'Detect Pest'}
          </button>
        </section>

        <section className="card result-card large-card">
          <div className="small-heading">RESULTS</div>
          {!result ? (
            <div className="result-empty">No result yet. Upload an image and click Detect Pest to view the report.</div>
          ) : (
            <div className="result-panel">
              <div className="result-grid">
                <div>
                  <span className="result-label">Pest name</span>
                  <strong>{result.pest}</strong>
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
                <span className="result-label">Symptoms</span>
                <p>{result.symptoms}</p>
              </div>

              <div className="result-section">
                <span className="result-label">Recommended control method</span>
                <p>{result.control}</p>
              </div>

              <div className="result-section">
                <span className="result-label">Prevention tips</span>
                <p>{result.prevention}</p>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  )
}
