export const irrigationRecommendations = {
  Rice: {
    waterFrequency: 'Every 2-3 days during early growth and daily in peak heat.',
    waterRequirement: '6-8 mm per day',
    bestTime: 'Early morning before 9 AM',
    method: 'Flood irrigation with controlled shallow water layers.',
    tips: 'Use field levelling and avoid deep flooding when not necessary.',
  },
  Wheat: {
    waterFrequency: 'Every 5-7 days depending on soil moisture and growth stage.',
    waterRequirement: '4-6 mm per day',
    bestTime: 'Early morning or late evening',
    method: 'Sprinkler or furrow irrigation for even coverage.',
    tips: 'Avoid over-irrigation during grain filling to prevent quality loss.',
  },
  Tomato: {
    waterFrequency: 'Every 2-4 days with more frequent watering in hot weather.',
    waterRequirement: '5-7 mm per day',
    bestTime: 'Early morning or evening',
    method: 'Drip irrigation is recommended for targeted watering.',
    tips: 'Keep soil moist but avoid waterlogging to reduce disease pressure.',
  },
  Cotton: {
    waterFrequency: 'Every 5-8 days in dry conditions and after flowering if weather is hot.',
    waterRequirement: '5-7 mm per day',
    bestTime: 'Early morning',
    method: 'Furrow or sprinkler irrigation with careful scheduling.',
    tips: 'Reduce water stress during flowering and boll development.',
  },
  Maize: {
    waterFrequency: 'Every 4-6 days, increasing during silking and tasseling.',
    waterRequirement: '6-8 mm per day',
    bestTime: 'Early morning',
    method: 'Sprinkler or drip irrigation for even soil moisture.',
    tips: 'Monitor leaf curling and stress symptoms during peak vegetative growth.',
  },
  Potato: {
    waterFrequency: 'Every 3-5 days depending on soil texture and weather.',
    waterRequirement: '4-6 mm per day',
    bestTime: 'Early morning',
    method: 'Furrow irrigation with good drainage.',
    tips: 'Keep the root zone steady and avoid wetting leaves during evening hours.',
  },
  Groundnut: {
    waterFrequency: 'Every 4-7 days with reduced frequency after pod formation.',
    waterRequirement: '4-5 mm per day',
    bestTime: 'Early morning',
    method: 'Drip or sprinkler irrigation for consistent moisture.',
    tips: 'Reduce watering near maturity to avoid pod rot and fungal issues.',
  },
}

export const irrigationSoilTypes = ['Loamy', 'Clay', 'Sandy', 'Silt']
export const irrigationWeatherConditions = ['Sunny', 'Cloudy', 'Humid', 'Windy', 'Rainy']

export const getIrrigationRecommendation = ({ crop, soilType, weather, stage }) => {
  const base = irrigationRecommendations[crop] || irrigationRecommendations.Rice

  return {
    crop,
    soilType,
    weather,
    stage,
    waterFrequency: base.waterFrequency,
    waterRequirement: base.waterRequirement,
    bestTime: base.bestTime,
    method: base.method,
    tips: base.tips,
  }
}
