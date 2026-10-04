export const chatbotExamples = [
  'Why are my leaves yellow?',
  'Which fertilizer is best for rice?',
  'How much water does tomato need?',
  'How can I control pests?',
  'When should I harvest wheat?',
]

export const getChatbotResponse = (message) => {
  const text = message.toLowerCase()

  if (text.includes('yellow') || text.includes('chlorosis') || text.includes('nitrogen')) {
    return 'Yellow leaves often mean a nutrient issue, especially nitrogen deficiency. Check the soil and apply a balanced fertilizer with nitrogen if the crop is pale and slow growing.'
  }

  if (text.includes('rice') && (text.includes('fertilizer') || text.includes('best')) ) {
    return 'For rice, a split application of NPK 16-16-16 plus a later nitrogen top dressing works well in most fields. Keep the soil moist and avoid excess flooding.'
  }

  if (text.includes('tomato') && text.includes('water')) {
    return 'Tomato plants prefer consistent moisture and benefit greatly from drip irrigation. Water early in the morning and avoid letting the soil dry out completely between watering cycles.'
  }

  if (text.includes('pest') || text.includes('control')) {
    return 'Start with field scouting and remove heavily infested leaves. For severe outbreaks, use a recommended insecticide and maintain proper plant spacing to reduce pest pressure.'
  }

  if (text.includes('wheat') && text.includes('harvest')) {
    return 'Wheat is usually ready to harvest when grains become hard, the heads turn golden, and moisture drops to a suitable level. Check field moisture before cutting to reduce losses.'
  }

  if (text.includes('fungus') || text.includes('disease') || text.includes('leaf spot')) {
    return 'Leaf spot diseases usually appear as circular lesions on leaves. Remove infected tissue, improve air circulation, and apply a suitable fungicide based on crop and local guidance.'
  }

  if (text.includes('soil') || text.includes('fertility')) {
    return 'Healthy soil starts with regular compost application, balanced fertilization, and good drainage. Soil testing can help you correct nutrient imbalance more precisely.'
  }

  return 'A healthy crop plan starts with regular field checks, timely watering, and nutrition matching the current weather. If you share your crop and issue, I can suggest a more specific action.'
}
