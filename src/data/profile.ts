// ---------------------------------------------------------------------------
// Profile, biography and contact links.
// Edit the values below; every page reads from this file.
// Leave a link as an empty string ("") to hide it everywhere on the site.
// Text fields marked "Markdown" accept [label](https://...) links and *italics*.
// ---------------------------------------------------------------------------

export const profile = {
  name: 'Al Hossain Rafi',
  // Used in page titles and search results.
  designation: 'Incoming M.S. Student & Graduate Research Assistant',
  // Lines under your name in the profile column (Markdown).
  sidebar: [
    'Incoming M.S. in Environmental Biology',
    '[Texas Tech University](https://www.depts.ttu.edu/nrm/)',
    'B.URP, Khulna University of Engineering & Technology',
  ],
  location: 'Lubbock, Texas',
  locationLink: 'https://www.google.com/maps/place/Lubbock,+TX',
  // Cycled by the typing effect in the header.
  keywords: ['UAV Remote Sensing', 'Urban Ecology', 'InSAR', 'Land Subsidence', 'GeoAI', 'Climate Hazards', 'Remote Sensing & GIS'],

  // Used for <meta name="description"> and social previews.
  description:
    'Al Hossain Rafi is an incoming M.S. student in Environmental Biology at Texas Tech University and a KUET urban planning graduate, researching UAV-based geospatial modeling, InSAR land subsidence, remote sensing and geospatial machine learning.',

  // Home page biography (Markdown): paragraphs before the research-area list...
  bioIntro: [
    'Hi, I am Al Hossain Rafi, an incoming M.S. student in Environmental Biology at the [Department of Natural Resources Management, Texas Tech University](https://www.depts.ttu.edu/nrm/), starting in Spring 2027. I will work as a Graduate Research Assistant under [Dr. A. H. M. Ali Reza](https://www.depts.ttu.edu/nrm/people/faculty/reza-ali/reza-ali.php), Associate Professor of Practice, on UAV-based geospatial modeling to detect species in Texas and to understand how urban development affects them.',
    'I received my Bachelor of Urban and Regional Planning (B.URP) from [Khulna University of Engineering & Technology (KUET)](https://www.kuet.ac.bd/), Bangladesh, and currently work as a Research Associate at Planning Research & Development Consultancy (PLANCON). My research areas encompass but are not limited to:',
  ],
  // ...the research areas shown as bullets...
  researchAreas: [
    'UAV and Satellite Remote Sensing, GIS, Species Detection and Urban Ecology',
    'InSAR, Land Subsidence and Geohazards',
    'Climate Change, Natural Hazards and Disaster Management',
    'Geospatial Machine Learning, GeoAI and Explainable AI',
    'Computational Hydrology, Groundwater and Earth System Modeling',
    'Environmental Planning, Public Health and Transportation',
  ],
  // ...and paragraphs after it.
  bioOutro: [
    'My undergraduate thesis combined DInSAR, InSAR and explainable machine learning to quantify land subsidence in the deltaic metropolis of Khulna. I have co-authored peer-reviewed articles in *Ecological Indicators*, *Journal of Urban Management*, *PLOS ONE*, *Journal of Water and Climate Change*, *Smart Agricultural Technology* and *City and Environment Interactions*, with a further paper accepted in *Scientific Reports*.',
    'Previously, I was a Research Assistant at the Center for Environmental Research (CER) and a GIS intern with Khulna City Corporation. My research code is available on [GitHub](https://github.com/RafiHossain).',
  ],

  emails: ['alhossainrafi@gmail.com'],
  links: {
    googleScholar: 'https://scholar.google.com/citations?hl=en&user=M6Ej7scAAAAJ',
    researchGate: 'https://www.researchgate.net/profile/Al-Rafi-5',
    linkedin: 'https://www.linkedin.com/in/rafi-hossain-a39398244',
    github: 'https://github.com/RafiHossain',
    orcid: 'https://orcid.org/0009-0004-0123-0163',
  },

  // Optional: put a CV at public/cv/Al_Hossain_Rafi_CV.pdf (same file name) and a
  // "CV" link appears on the contact page. With no file there, no CV link is shown.
  cvFile: '/cv/Al_Hossain_Rafi_CV.pdf',

  // Postal address and phone are kept here but hidden by default.
  // Set show: true to display them on the contact page.
  phone: { value: '+880 1859-285151', show: false },
  address: { value: 'Khan Jahan Ali Hall, Room 209, KUET, Khulna-9203, Bangladesh', show: false },
};

// Research interests listed on the R&D page.
export const researchInterests = [
  'UAV-based remote sensing and species detection',
  'Urban development and its effects on species and habitats',
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

// Methods and tools, listed only where they appear in your projects, papers or CV.
export const skills = [
  { group: 'Remote sensing', items: ['InSAR / DInSAR', 'Sentinel-1 SAR backscatter', 'Spectral indices (NDVI, NDWI, NDBI, NDMI, LST)', 'Night-time lights'] },
  { group: 'Machine learning', items: ['Random Forest', 'XGBoost', 'LightGBM', 'CatBoost', 'AdaBoost', 'SVM', 'ANN / DNN / CNN', 'Explainable ML'] },
  { group: 'GIS & platforms', items: ['ArcGIS', 'Google Earth Engine'] },
  { group: 'Programming & analysis', items: ['Python (pandas, scikit-learn, matplotlib)', 'R', 'SPSS', 'Correlation, Mann-Whitney U and chi-square tests', 'Location quotient, shift-share, AHP, PCA'] },
  { group: 'Design', items: ['AutoCAD', 'SketchUp', 'Adobe Illustrator'] },
  { group: 'Fieldwork', items: ['Questionnaire surveys', 'Participatory surveys', 'Focus group discussions', 'Traffic volume & spot-speed surveys', 'UAV data collection'] },
];
