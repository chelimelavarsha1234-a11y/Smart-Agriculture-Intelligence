export const weatherDemoData = {
  Hyderabad: {
    temperature: '29°C',
    rainChance: '20% chance of rain',
    humidity: '68%',
    windSpeed: '10 km/h',
    tip: 'Good day for field scouting and light fertilizer application. Keep young plants shaded if the sun is hot.',
    fieldAdvice: 'Make sure irrigation and nutrient applications match the current weather for healthier crops.',
  },
  Delhi: {
    temperature: '33°C',
    rainChance: '12% chance of rain',
    humidity: '47%',
    windSpeed: '14 km/h',
    tip: 'Warm and dry conditions require careful irrigation scheduling and monitoring of leaf stress.',
    fieldAdvice: 'Avoid midday fertilizer spread on exposed soil to minimize nutrient loss.',
  },
  Bengaluru: {
    temperature: '27°C',
    rainChance: '38% chance of rain',
    humidity: '72%',
    windSpeed: '9 km/h',
    tip: 'Moist conditions are favorable for quick crop checks and disease screening.',
    fieldAdvice: 'Keep an eye on leaf wetness and provide airflow near dense crop areas.',
  },
  Nagpur: {
    temperature: '31°C',
    rainChance: '26% chance of rain',
    humidity: '61%',
    windSpeed: '12 km/h',
    tip: 'Use timely watering around flowering stages and inspect fields for early stress signs.',
    fieldAdvice: 'Plan irrigation around cooler hours to preserve water and reduce evaporation losses.',
  },
}

export const getWeatherData = (city) => {
  const normalized = city.trim()
  return weatherDemoData[normalized] || weatherDemoData.Hyderabad
}
