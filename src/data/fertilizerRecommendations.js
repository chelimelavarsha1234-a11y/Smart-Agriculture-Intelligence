export const fertilizerRecommendations = {
  Rice: {
    recommendation: 'NPK 16-16-16',
    quantity: '45 kg per acre',
    method: 'Broadcast evenly in the field and incorporate lightly into the soil.',
    frequency: 'Apply in two split doses during early growth and tillering.',
    precautions: 'Avoid over-application during waterlogged periods to reduce nutrient loss.',
  },
  Wheat: {
    recommendation: 'Urea + DAP blend',
    quantity: '50 kg per acre',
    method: 'Apply in bands near the root zone and top-dress after irrigation.',
    frequency: 'Use two applications: first at sowing and second during tillering.',
    precautions: 'Do not apply on dry, cracked soil where fertilizer may volatilize.',
  },
  Tomato: {
    recommendation: 'Balanced NPK 19-19-19',
    quantity: '35 kg per acre',
    method: 'Use fertigation or side-dress close to the plant row for efficient uptake.',
    frequency: 'Repeat every 10 to 14 days during active fruiting.',
    precautions: 'Avoid excess nitrogen, which can lead to leafy growth and poor fruiting.',
  },
  Cotton: {
    recommendation: 'Potassium-rich NPK mix',
    quantity: '40 kg per acre',
    method: 'Apply as band placement and ensure irrigation follows soon after.',
    frequency: 'Split into two applications during early growth and flowering.',
    precautions: 'Reduce nitrogen if the crop shows rapid vegetative growth with poor boll set.',
  },
  Maize: {
    recommendation: 'Nitrogen-heavy urea blend',
    quantity: '60 kg per acre',
    method: 'Apply three quarters at planting and the remainder as top dressing.',
    frequency: 'Use in split applications during vegetative growth.',
    precautions: 'Avoid applying on heavy rain days to reduce runoff and nutrient loss.',
  },
  Potato: {
    recommendation: 'Potash + phosphorous blend',
    quantity: '48 kg per acre',
    method: 'Band near the seed row and cover lightly with soil.',
    frequency: 'Apply before ridging and again during tuber initiation.',
    precautions: 'Do not overapply nitrogen in the final stage to prevent excessive foliage.',
  },
  Groundnut: {
    recommendation: 'Phosphorus-rich fertilizer',
    quantity: '30 kg per acre',
    method: 'Place in the root zone before flowering to support pod development.',
    frequency: 'Apply once at sowing and once at flowering if soil is deficient.',
    precautions: 'Avoid excessive salt buildup or saline irrigation in later stages.',
  },
}

export const soilTypes = ['Loamy', 'Clay', 'Sandy', 'Silt', 'Red soil']
export const growthStages = ['Early growth', 'Flowering', 'Fruit setting', 'Maturity']
export const fertilityLevels = ['Low', 'Moderate', 'High']

export const getFertilizerRecommendation = ({ crop, soilType, stage, fertility, fieldSize, previousFertilizer }) => {
  const base = fertilizerRecommendations[crop] || fertilizerRecommendations.Rice

  return {
    crop,
    soilType,
    stage,
    fertility,
    fieldSize,
    previousFertilizer,
    recommendation: base.recommendation,
    quantity: base.quantity,
    method: base.method,
    frequency: base.frequency,
    precautions: base.precautions,
  }
}
