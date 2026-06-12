export interface Disease {
  id: string;
  name: string;
  crop: string;
  symptoms: string;
  treatment: string[];
  prevention: string[];
  severity: 'low' | 'moderate' | 'high' | 'critical';
  yieldImpact: string;
  confidenceThreshold: number;
}

export const diseases: Disease[] = [
  {
    id: 'tomato_early_blight',
    name: 'Early Blight',
    crop: 'Tomato',
    symptoms: 'Dark brown spots with concentric rings on lower leaves, yellowing, defoliation from bottom up.',
    treatment: [
      'Apply copper-based fungicide every 7-10 days',
      'Remove and destroy infected lower leaves',
      'Ensure adequate plant spacing for airflow',
      'Mulch around base to prevent soil splash'
    ],
    prevention: [
      'Rotate crops (avoid planting tomatoes in same spot for 3 years)',
      'Use resistant varieties',
      'Water at base, avoid wetting foliage',
      'Remove plant debris at end of season'
    ],
    severity: 'moderate',
    yieldImpact: '15-25% yield reduction if untreated. Early intervention can limit loss to under 10%.',
    confidenceThreshold: 0.85
  },
  {
    id: 'tomato_late_blight',
    name: 'Late Blight',
    crop: 'Tomato',
    symptoms: 'Water-soaked lesions on leaves, white fungal growth on undersides, rapid blackening of stems and fruit.',
    treatment: [
      'Apply systemic fungicide (mancozeb or chlorothalonil) immediately',
      'Remove and bag all infected plant parts',
      'In severe cases, remove entire plant to protect neighbors',
      'Increase ventilation in greenhouse settings'
    ],
    prevention: [
      'Plant certified disease-free transplants',
      'Avoid overhead irrigation',
      'Monitor weather - high humidity + cool temps favor disease',
      'Apply preventive fungicide before symptoms appear'
    ],
    severity: 'critical',
    yieldImpact: 'Can destroy entire crop within 1-2 weeks. Up to 100% loss without intervention.',
    confidenceThreshold: 0.90
  },
  {
    id: 'potato_early_blight',
    name: 'Early Blight',
    crop: 'Potato',
    symptoms: 'Small dark brown spots with target-like rings on leaves, premature defoliation.',
    treatment: [
      'Apply azoxystrobin or chlorothalonil fungicide',
      'Increase nitrogen fertilization moderately',
      'Maintain consistent irrigation (avoid drought stress)',
      'Remove severely infected leaves'
    ],
    prevention: [
      'Practice 2-3 year crop rotation',
      'Plant resistant varieties',
      'Hill soil around stems to protect tubers',
      'Harvest promptly when mature'
    ],
    severity: 'moderate',
    yieldImpact: '20-30% tuber yield reduction if severe defoliation occurs before senescence.',
    confidenceThreshold: 0.85
  },
  {
    id: 'potato_late_blight',
    name: 'Late Blight',
    crop: 'Potato',
    symptoms: 'Pale green to brown lesions on leaves, white spores on leaf undersides in humid conditions, tuber rot.',
    treatment: [
      'Immediate fungicide application (metalaxyl + mancozeb)',
      'Destroy volunteer potato plants in area',
      'Ensure good drainage in field',
      'Apply post-harvest fungicide to stored tubers'
    ],
    prevention: [
      'Use certified seed potatoes',
      'Destroy cull piles and volunteer potatoes',
      'Plant when soil temperatures are warmer',
      'Monitor fields closely during wet periods'
    ],
    severity: 'critical',
    yieldImpact: 'Can cause 50-100% yield loss. Tuber rot can destroy stored harvests.',
    confidenceThreshold: 0.90
  },
  {
    id: 'corn_leaf_blight',
    name: 'Northern Corn Leaf Blight',
    crop: 'Corn',
    symptoms: 'Long elliptical gray-green to tan lesions on leaves, starting on lower leaves.',
    treatment: [
      'Foliar fungicide if disease is present before tasseling',
      'Prioritize fields with high yield potential',
      'Scout fields every 5-7 days during wet weather'
    ],
    prevention: [
      'Plant resistant hybrids',
      'Rotate with non-host crops (soybeans, small grains)',
      'Till residue to promote decomposition',
      'Avoid continuous corn where possible'
    ],
    severity: 'moderate',
    yieldImpact: 'Up to 30% yield loss if lesions cover majority of leaf area before grain fill.',
    confidenceThreshold: 0.80
  },
  {
    id: 'corn_rust',
    name: 'Common Rust',
    crop: 'Corn',
    symptoms: 'Small reddish-brown pustules on leaf surfaces, may appear on both upper and lower leaf surfaces.',
    treatment: [
      'Foliar fungicide application if disease appears before silking',
      'Triazole + strobilurin combinations most effective',
      'Treat before pustules cover >5% of leaf area'
    ],
    prevention: [
      'Choose resistant hybrids',
      'Adjust planting date to avoid peak rust season',
      'Scout fields regularly during growing season',
      'Maintain balanced fertility (avoid excessive N)'
    ],
    severity: 'low',
    yieldImpact: 'Usually minimal (<5%) in most regions. Can reach 15-20% in severe epidemic years.',
    confidenceThreshold: 0.80
  },
  {
    id: 'pepper_bacterial_spot',
    name: 'Bacterial Spot',
    crop: 'Pepper',
    symptoms: 'Small dark water-soaked spots on leaves, angular lesions bounded by veins, fruit spots with scabby centers.',
    treatment: [
      'Apply copper-based bactericide + mancozeb',
      'Spray every 5-7 days during wet weather',
      'Avoid working in wet fields',
      'Remove severely infected plants'
    ],
    prevention: [
      'Use certified disease-free seed and transplants',
      'Rotate away from peppers/tomatoes for 2+ years',
      'Avoid overhead irrigation',
      'Sanitize tools and equipment'
    ],
    severity: 'high',
    yieldImpact: '20-50% yield loss. Fruit spotting renders produce unmarketable.',
    confidenceThreshold: 0.85
  },
  {
    id: 'grape_downy_mildew',
    name: 'Downy Mildew',
    crop: 'Grape',
    symptoms: 'Yellowish-green angular spots on upper leaf surface, white/downy fungal growth on undersides.',
    treatment: [
      'Apply systemic fungicide (mefenoxam or fosetyl-Al)',
      'Alternate with copper-based products',
      'Remove infected leaves and canes',
      'Improve canopy airflow through pruning'
    ],
    prevention: [
      'Plant resistant varieties where available',
      'Space vines for maximum air circulation',
      'Monitor weather forecasts for infection periods',
      'Apply preventive sprays before bloom'
    ],
    severity: 'high',
    yieldImpact: 'Can reduce yields 30-50%. Fruit infection causes crop loss and quality reduction.',
    confidenceThreshold: 0.88
  },
  {
    id: 'apple_scab',
    name: 'Apple Scab',
    crop: 'Apple',
    symptoms: 'Olive-green to black spots on leaves and fruit, fruit may become cracked and deformed.',
    treatment: [
      'Apply fungicide (myclobutanil or captan) at first sign',
      'Continue sprays at 7-10 day intervals',
      'Rake and remove fallen leaves in autumn',
      'Prune for better air circulation'
    ],
    prevention: [
      'Plant scab-resistant varieties (Liberty, Freedom, Enterprise)',
      'Apply preventive fungicide starting at green tip',
      'Maintain tree vigor with proper nutrition',
      'Remove leaf litter to reduce overwintering spores'
    ],
    severity: 'moderate',
    yieldImpact: 'Primarily cosmetic on fruit, but severe leaf infection reduces tree vigor and next year\'s yield by 20%.',
    confidenceThreshold: 0.85
  },
  {
    id: 'wheat_stripe_rust',
    name: 'Stripe Rust',
    crop: 'Wheat',
    symptoms: 'Yellow-orange pustules arranged in stripes along leaf veins, most visible on upper leaf surface.',
    treatment: [
      'Apply foliar fungicide (propiconazole or tebuconazole)',
      'Treat at flag leaf emergence for best results',
      'Act quickly - disease spreads rapidly in cool wet weather',
      'Consider aerial application for large fields'
    ],
    prevention: [
      'Plant resistant varieties',
      'Monitor stripe rust forecasting systems',
      'Adjust planting date to avoid peak disease periods',
      'Avoid excessive nitrogen which promotes lush growth'
    ],
    severity: 'high',
    yieldImpact: 'Up to 50% yield loss in severe epidemics. Flag leaf infection is most critical for yield.',
    confidenceThreshold: 0.88
  }
];

export function getDiseaseById(id: string): Disease | undefined {
  return diseases.find(d => d.id === id);
}

export function getAllCrops(): string[] {
  return Array.from(new Set(diseases.map(d => d.crop)));
}

export function getDiseasesByCrop(crop: string): Disease[] {
  return diseases.filter(d => d.crop.toLowerCase() === crop.toLowerCase());
}
