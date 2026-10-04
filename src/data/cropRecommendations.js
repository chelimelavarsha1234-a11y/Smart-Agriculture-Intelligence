export const cropOptions = ['Rice', 'Wheat', 'Tomato', 'Cotton', 'Maize', 'Potato', 'Groundnut']

export const cropRecommendations = {
  Rice: {
    fertilizer: 'Apply NPK 16-16-16 early and nitrogen later for stronger yield.',
    water: 'Keep paddies moist with shallow water layers and avoid deep flooding.',
    soil: 'Use loamy soils with good drainage and add compost to improve fertility.',
    harvest: 'Harvest when grains turn golden and moisture falls below 20%.',
  },
  Wheat: {
    fertilizer: 'Apply a balanced nitrogen-rich fertilizer during tillering to boost grain filling.',
    water: 'Water during critical growth stages, especially flowering and grain formation.',
    soil: 'Prefer well-drained loam with adequate organic matter and pH close to neutral.',
    harvest: 'Harvest when grains are hard and the crop matures evenly across the field.',
  },
  Tomato: {
    fertilizer: 'Use compost plus a phosphorus-rich starter fertilizer to support root development.',
    water: 'Maintain steady moisture without waterlogging; drip irrigation is highly suitable.',
    soil: 'Opt for fertile, well-drained soil with enough calcium to reduce blossom end rot.',
    harvest: 'Pick fruits when they are fully colored and firm for best market value.',
  },
  Cotton: {
    fertilizer: 'Apply potassium and nitrogen in split doses for healthy boll formation.',
    water: 'Avoid drought stress during flowering and boll development; water deeply but not too often.',
    soil: 'Use sandy loam with balanced nutrients and avoid compacted soil conditions.',
    harvest: 'Harvest when bolls open and fibers dry adequately before picking.',
  },
  Maize: {
    fertilizer: 'Use nitrogen-heavy feeding at early vegetative stages for strong leaf growth.',
    water: 'Keep soil evenly moist through silking and tasseling to preserve yield potential.',
    soil: 'Well-drained, fertile soil with good organic content supports heavy root growth.',
    harvest: 'Harvest once kernels are firm, mature, and moisture levels are suitable for drying.',
  },
  Potato: {
    fertilizer: 'Apply potassium-rich fertilizer and split nitrogen doses for better tuber size.',
    water: 'Maintain even moisture during tuber initiation and avoid drought or flooding stress.',
    soil: 'Loose, sandy loam with good drainage prevents disease and improves tuber development.',
    harvest: 'Lift tubers when vines yellow and skin sets for longer storage quality.',
  },
  Groundnut: {
    fertilizer: 'Use phosphorus and calcium sources to strengthen flowering and pod development.',
    water: 'Keep the root zone moderately moist; reduce irrigation near maturity to avoid quality loss.',
    soil: 'Sandy loam with good drainage and low salinity helps healthy pod formation.',
    harvest: 'Dig pods when plants mature, leaves yellow, and pods are well-developed.',
  },
}

export const getCropRecommendation = (crop) => cropRecommendations[crop] || cropRecommendations.Rice
