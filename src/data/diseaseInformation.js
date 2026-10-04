export const diseaseCatalog = [
  {
    name: 'Leaf Spot Disease',
    severity: 'Moderate',
    treatment:
      'Remove heavily infected leaves and apply a suitable recommended fungicide according to local agricultural guidance.',
    prevention:
      'Maintain proper spacing, avoid excessive leaf wetness, and monitor the crop regularly.',
    explanation:
      'The image shows circular leaf lesions with defined edges and discoloration, which is a classic pattern of fungal leaf spot infection.',
  },
  {
    name: 'Powdery Mildew',
    severity: 'High',
    treatment:
      'Prune infected growth and use a registered mildew control spray following local agronomy recommendations.',
    prevention: 'Improve airflow between plants and avoid dense canopy conditions during humid periods.',
    explanation:
      'Powdery mildew appears as white, powder-like growth on leaves and stems, indicating a fungal outbreak favored by warm, dry conditions.',
  },
  {
    name: 'Rust Infection',
    severity: 'Moderate',
    treatment:
      'Remove diseased foliage and apply a rust-control fungicide while keeping the crop well-ventilated.',
    prevention: 'Avoid overhead irrigation and rotate crops when possible to reduce disease pressure.',
    explanation:
      'Rust lesions are small orange or brown pustules that appear on leaf surfaces and spread rapidly under favorable moisture conditions.',
  },
  {
    name: 'Blight Damage',
    severity: 'High',
    treatment:
      'Sanitize the field, remove affected tissue, and follow a targeted disease-control program with field-approved fungicides.',
    prevention: 'Prevent water pooling in the field and monitor humidity levels during wet weather.',
    explanation:
      'Blight is strongly indicated by spotted leaves that quickly wilt, yellow, and collapse under excessive moisture and high humidity.',
  },
]

export const simulateDiseasePrediction = (fileName = 'leaf.jpg') => {
  const seed = Array.from(fileName).reduce((acc, ch) => acc + ch.charCodeAt(0), 0)
  const index = seed % diseaseCatalog.length
  const disease = diseaseCatalog[index]

  return {
    disease: disease.name,
    confidence: 90 + (seed % 8),
    severity: disease.severity,
    treatment: disease.treatment,
    prevention: disease.prevention,
    explanation: disease.explanation,
  }
}
