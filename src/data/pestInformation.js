export const pestCatalog = [
  {
    name: 'Fall Armyworm',
    severity: 'High',
    symptoms: 'Leaf chewing, ragged holes, and damaged central whorls in young plants.',
    control: 'Apply approved biological or chemical treatment immediately upon early detection.',
    prevention: 'Use field sanitation, resistant varieties, and regular monitoring of trap counts.',
  },
  {
    name: 'Aphids',
    severity: 'Moderate',
    symptoms: 'Clusters of small sap-sucking insects on new growth and distorted leaves.',
    control: 'Use targeted insecticidal soap or neem-based treatment according to local guidance.',
    prevention: 'Promote beneficial insects and minimize excessive nitrogen fertilization.',
  },
  {
    name: 'Whitefly',
    severity: 'Moderate',
    symptoms: 'Tiny white insects on the undersides of leaves and sticky honeydew residue.',
    control: 'Treat with recommended insecticides and remove heavily infested plants.',
    prevention: 'Maintain crop spacing and monitor regularly before outbreaks spread.',
  },
  {
    name: 'Leaf Hopper',
    severity: 'High',
    symptoms: 'Yellowing, stunting, and curling of leaves with visible insect movement.',
    control: 'Use effective insecticide sprays and maintain field hygiene to limit reinfestation.',
    prevention: 'Early scouting and prompt treatment limit crop losses during warm seasons.',
  },
]

export const simulatePestPrediction = (fileName = 'plant.jpg') => {
  const seed = Array.from(fileName).reduce((acc, char) => acc + char.charCodeAt(0), 0)
  const index = seed % pestCatalog.length
  const pest = pestCatalog[index]

  return {
    pest: pest.name,
    confidence: 91 + (seed % 7),
    severity: pest.severity,
    symptoms: pest.symptoms,
    control: pest.control,
    prevention: pest.prevention,
  }
}
