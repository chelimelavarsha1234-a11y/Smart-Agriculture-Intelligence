import { UploadCloud, X } from 'lucide-react'

export default function FileUploader({ label, accept, onFileSelect, previewUrl, onClear }) {
  return (
    <div className="uploader-block">
      <label className="file-uploader">
        <input type="file" accept={accept} onChange={onFileSelect} />
        <span className="upload-icon"><UploadCloud size={18} /></span>
        <span>{label}</span>
      </label>

      {previewUrl && (
        <div className="image-preview-wrap">
          <img src={previewUrl} alt="Uploaded preview" className="image-preview" />
          <button type="button" className="remove-preview" onClick={onClear} aria-label="Remove image">
            <X size={14} />
          </button>
        </div>
      )}
    </div>
  )
}
