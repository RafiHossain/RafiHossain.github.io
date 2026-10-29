// ---------------------------------------------------------------------------
// Profile, biography and contact links.
// Edit the values below; every page reads from this file.
// Leave a link as an empty string ("") to hide it everywhere on the site.
// ---------------------------------------------------------------------------

export const profile = {
  name: 'Al Hossain Rafi',
  // Short line under your name in the sidebar and page titles.
  designation: 'Research Associate · Urban & Regional Planner',
  affiliation: 'B.URP, Khulna University of Engineering & Technology (KUET)',
  location: 'Khulna, Bangladesh',
  // Shown as small keywords under your name.
  keywords: ['InSAR', 'Land Subsidence', 'Remote Sensing & GIS', 'GeoAI', 'Climate Hazards', 'Computational Hydrology'],

  // Used for <meta name="description"> and social previews.
  description:
    'Al Hossain Rafi is an urban and regional planning graduate of KUET, Bangladesh, researching InSAR-based land subsidence, remote sensing, geospatial machine learning and climate-related hazards.',

  // Biography paragraphs on the home page. Plain text; one string per paragraph.
  bio: [
    'I am a geospatial researcher from Bangladesh with a Bachelor of Urban and Regional Planning (B.URP) from Khulna University of Engineering & Technology (KUET). I currently work as a Research Associate at Planning Research & Development Consultancy (PLANCON), contributing to research, planning and design projects in urban planning and environmental management. From 2023 to 2025 I was a Research Assistant at the Center for Environmental Research (CER), working on pollution impacts, transportation planning, traffic safety and public health.',
    'My undergraduate thesis, supervised by Mafrid Haydar, combined DInSAR, InSAR and explainable machine learning to quantify land subsidence and map subsidence susceptibility in the Khulna City Corporation area, a deltaic metropolis. Alongside this, I have co-authored peer-reviewed studies that use machine learning and geospatial data to map forest fire, coastal erosion and urban expansion susceptibility, model crop production and wet bulb temperature, and assess natural spring-based water potential across Bangladesh.',
    'I have applied these methods in practice as a GIS intern with Khulna City Corporation and through extensive field surveys on urban, rural, coastal and public health issues. I am seeking graduate research opportunities (MS/PhD) in geohazards, Earth system and hydrological modeling, and climate-sensitive environmental planning, where data-driven geospatial analysis and GeoAI can support better and more sustainable decisions.',
  ],

  emails: ['alhossainrafi@gmail.com', 'rafi1917008@stud.kuet.ac.bd'],
  links: {
    googleScholar: 'https://scholar.google.com/citations?hl=en&user=M6Ej7scAAAAJ',
    researchGate: 'https://www.researchgate.net/profile/Al-Rafi-5',
    linkedin: 'https://www.linkedin.com/in/rafi-hossain-a39398244',
    github: 'https://github.com/RafiHossain',
    orcid: '', // e.g. 'https://orcid.org/0000-0000-0000-0000'
  },

  // Put your CV at public/cv/Al_Hossain_Rafi_CV.pdf (same file name) and it is
  // linked automatically from the header, the CV page and the contact page.
  cvFile: '/cv/Al_Hossain_Rafi_CV.pdf',

  // Postal address and phone are kept here but hidden by default.
  // Set show: true to display them on the contact page.
  phone: { value: '+880 1859-285151', show: false },
  address: { value: 'Khan Jahan Ali Hall, Room 209, KUET, Khulna-9203, Bangladesh', show: false },
};

// Research interests shown on the home page (short list).
export const researchInterests = [
  'InSAR and land subsidence',
  'Remote sensing and GIS',
  'Remote sensing of groundwater resources',
  'Groundwater modeling',
  'Computational hydrology',
  'Climate change and Earth system modeling',
  'Natural hazards and disaster management',
  'Geospatial machine learning and GeoAI',
  'Environmental planning and engineering',
  'Air quality, ecosystems and public health',
  'Transportation planning, engineering and traffic safety',
  'Digital twin cities',
];

// Methods and tools, listed only where they appear in your projects or papers.
export const skills = [
  { group: 'Remote sensing', items: ['InSAR / DInSAR', 'Sentinel-1 SAR backscatter', 'Spectral indices (NDVI, NDWI, NDBI, NDMI, LST)', 'Night-time lights'] },
  { group: 'Machine learning', items: ['Random Forest', 'XGBoost', 'LightGBM', 'CatBoost', 'AdaBoost', 'SVM', 'ANN / DNN / CNN', 'Explainable ML'] },
  { group: 'GIS & platforms', items: ['ArcGIS', 'Google Earth Engine'] },
  { group: 'Programming & analysis', items: ['Python (pandas, scikit-learn, matplotlib)', 'R', 'SPSS', 'Correlation, Mann-Whitney U and chi-square tests', 'Location quotient, shift-share, AHP, PCA'] },
  { group: 'Design', items: ['AutoCAD', 'SketchUp', 'Adobe Illustrator'] },
  { group: 'Fieldwork', items: ['Questionnaire surveys', 'Participatory surveys', 'Focus group discussions', 'Traffic volume & spot-speed surveys', 'UAV data collection'] },
];
