// ---------------------------------------------------------------------------
// Research themes on the Research page.
// `publications` lists ids from src/content/publications.yaml; those papers are
// shown under the theme automatically.
// ---------------------------------------------------------------------------

export const themes = [
  {
    title: 'Land subsidence and InSAR',
    text: 'Measuring ground deformation in the deltaic city of Khulna with DInSAR and InSAR time series, and explaining its drivers and spatial susceptibility with interpretable machine learning. This was the focus of my undergraduate thesis.',
    publications: ['thesis-burp', 'sub-insar-xai-subsidence', 'sub-dinsar-subsidence'],
  },
  {
    title: 'Climate-related hazard susceptibility',
    text: 'Data-driven susceptibility mapping of forest fire, coastal erosion, floods, drought and thunderstorms in Bangladesh, including projections under future climate scenarios, using remote sensing predictors and ensemble machine learning.',
    publications: ['forest-fire-2024', 'forest-fire-climate-2025', 'coastal-erosion-2025', 'sub-coastal-flood', 'sub-flood-backscatter', 'sub-drought-climate', 'sub-drought-sar', 'sub-thunderstorm'],
  },
  {
    title: 'Urban growth and land transformation',
    text: 'Modeling where cities expand and how land use changes, by combining night-time lights, thermal and spectral imagery with machine learning and geostatistics.',
    publications: ['urban-expansion-jum-2025', 'dhaka-urban-expansion-2026', 'wet-bulb-scirep-2026', 'sub-urban-functional-zones'],
  },
  {
    title: 'Water, agriculture and ecosystems',
    text: 'Assessing natural spring-based water potential, crop production and soil erosion impacts on ecosystem services, linked to my interest in remote sensing of groundwater resources and groundwater modeling.',
    publications: ['spring-water-potential-2026', 'crop-production-2025', 'sub-soil-erosion', 'iccesd-deforestation-2024', 'iccesd-resource-management-2024'],
  },
  {
    title: 'Transportation, environment and public health',
    text: 'Field-based studies of traffic congestion, intersection performance and road-side pollution, and of public health, carried out through coursework and with the Center for Environmental Research.',
    publications: ['sub-od-traffic-congestion', 'prep-intersection-signalization', 'prep-road-pollutants', 'sub-diabetes-xai'],
  },
];

// Collaborators, as listed on the previous portfolio.
export const collaborators = [
  { name: 'Mafrid Haydar', role: 'Assistant Professor, Department of URP, KUET; Founder, Geospatial Matrix' },
  { name: 'Sakib Hosan', role: 'Research Assistant, Geospatial Matrix; Graduate student, URP, KUET' },
  { name: 'Reshma Afroz Rimi', role: 'MSc in Community Planning, Alabama A&M University' },
  { name: 'Mahin Rahman', role: 'MSc in Urban and Environmental Planning, Arizona State University' },
];
