// ---------------------------------------------------------------------------
// Profile, biography and contact links.
// Edit the values below; every page reads from this file.
// Leave a link as an empty string ("") to hide it everywhere on the site.
// ---------------------------------------------------------------------------

export const profile = {
  name: 'Al Hossain Rafi',
  // Short line under your name in the sidebar and page titles.
  designation: 'Research Assistant · Urban & Regional Planner',
  affiliation: 'B.URP, Khulna University of Engineering & Technology (KUET)',
  location: 'Khulna, Bangladesh',
  // Shown as small keywords under your name.
  keywords: ['InSAR', 'Land Subsidence', 'Remote Sensing & GIS', 'Geospatial Machine Learning', 'Climate Hazards'],

  // Used for <meta name="description"> and social previews.
  description:
    'Al Hossain Rafi is an urban and regional planning graduate of KUET, Bangladesh, researching InSAR-based land subsidence, remote sensing, geospatial machine learning and climate-related hazards.',

  // Biography paragraphs on the home page. Plain text; one string per paragraph.
  bio: [
    'I am a geospatial researcher from Bangladesh with a Bachelor of Urban and Regional Planning (B.URP) from Khulna University of Engineering & Technology (KUET). I work as a Research Assistant at Geospatial Matrix and at the Center for Environmental Research (CER), and I am a founding member of a research group working on GIS and remote sensing, machine learning, climate change, transportation and environmental degradation.',
    'My undergraduate thesis combined DInSAR, InSAR and explainable machine learning to quantify land subsidence and map subsidence susceptibility in the Khulna City Corporation area, a deltaic metropolis. Alongside this, I have co-authored peer-reviewed studies that use machine learning and geospatial data to map forest fire, coastal erosion and urban expansion susceptibility, model crop production, and assess natural spring-based water potential across Bangladesh.',
    'I have applied these methods in practice as a GIS intern with Khulna City Corporation, and through extensive field surveys on urban, rural, coastal and public health issues. I am seeking graduate research opportunities (MS/PhD) in geohazards, groundwater and climate-sensitive environmental planning, where data-driven geospatial analysis can support better and more sustainable decisions.',
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
  'Climate change and natural hazards',
  'Geospatial machine learning',
  'Environmental planning and engineering',
  'Ecosystems and public health',
  'Transportation planning, engineering and traffic safety',
];

// Methods and tools, listed only where they appear in your projects or papers.
export const skills = [
  { group: 'Remote sensing', items: ['InSAR / DInSAR', 'Sentinel-1 SAR backscatter', 'Spectral indices (NDVI, NDWI, NDBI, NDMI, LST)', 'Night-time lights'] },
  { group: 'Machine learning', items: ['Random Forest', 'XGBoost', 'LightGBM', 'CatBoost', 'AdaBoost', 'SVM', 'ANN / DNN / CNN', 'Explainable ML'] },
  { group: 'Programming & analysis', items: ['Python (pandas, scikit-learn, matplotlib)', 'SPSS', 'Correlation, Mann-Whitney U and chi-square tests', 'Location quotient, shift-share, AHP, PCA'] },
  { group: 'Fieldwork', items: ['Questionnaire surveys', 'Participatory surveys', 'Focus group discussions', 'Traffic volume & spot-speed surveys', 'UAV data collection'] },
];
