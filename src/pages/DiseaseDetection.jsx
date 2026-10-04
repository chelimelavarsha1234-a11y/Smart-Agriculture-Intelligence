import { useState } from 'react'
import FileUploader from '../components/FileUploader'
import DiseaseResult from '../components/DiseaseResult'
import { simulateDiseasePrediction } from '../data/diseaseInformation'

export default function DiseaseDetection() {
  const [selectedFile, setSelectedFile] = useState(null)
  const [previewUrl, setPreviewUrl] = useState('')
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')
  const [isDetecting, setIsDetecting] = useState(false)

  const handleFileChange = (event) => {
    const file = event.target.files?.[0]
    if (!file) return

    const validTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/jpg']
    if (!validTypes.includes(file.type) && !file.name.match(/\.(jpg|jpeg|png|webp)$/i)) {
      setError('Please upload a valid JPG, JPEG, PNG, or WEBP image.')
      return
    }

    const imageUrl = URL.createObjectURL(file)
    setSelectedFile(file)
    setPreviewUrl(imageUrl)
    setError('')
    setResult(null)
  }

  const handleDetect = () => {
    if (!selectedFile) {
      setError('Please upload a leaf image first.')
      setResult(null)
      return
    }

    setError('')
    setIsDetecting(true)

    window.setTimeout(() => {
      setResult(simulateDiseasePrediction(selectedFile.name))
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
        <h1>Crop Disease Detection</h1>
      </div>

      <div className="two-column-layout">
        <section className="card info-card large-card">
          <div className="small-heading">DISEASE DETECTION</div>
          <h2>Upload leaf image</h2>
          <p>
            Upload a sample crop leaf image and let the AI dashboard detect the disease, confidence score,
            treatment suggestions, and explanation.
          </p>

          <FileUploader
            label="Choose a leaf image"
            accept=".jpg,.jpeg,.png,.webp,image/jpeg,image/png,image/webp"
            onFileSelect={handleFileChange}
            previewUrl={previewUrl}
            onClear={handleClear}
          />

          {error && <div className="error-message">{error}</div>}

          <button type="button" className="primary-btn detect-btn" onClick={handleDetect} disabled={isDetecting}>
            {isDetecting ? 'Detecting...' : 'Detect Disease'}
          </button>
        </section>

        <section className="card result-card large-card">
          <div className="small-heading">RESULTS</div>
          <DiseaseResult
            result={result}
            emptyMessage="No result yet. Upload an image and click Detect Disease to view the report."
          />
        </section>
      </div>
    </div>
  )
}
