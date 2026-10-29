---
title: Data-Driven Urban Expansion Susceptibility Mapping
category: research
order: 3
featured: true
summary: A Random Forest and geostatistical approach to identify areas at high risk of urban sprawl in the major urban units of Bangladesh.
problem: Rapid, unplanned urban growth in Bangladesh consumes agricultural land and outpaces infrastructure. Planners need to know where expansion is most likely to happen next.
methods:
  - Random Forest susceptibility model with ROC/AUC evaluation
  - 20 factors, including DEM, slope, curvature, roughness, LST, NDVI, NDWI, LAI, land use/land cover, rainfall, population, and distance to rivers, roads, settlements, industry and growth centres
  - Geostatistical analysis of the predicted surfaces
tools: [Python, scikit-learn, pandas, matplotlib, GIS]
repo: https://github.com/RafiHossain/Data-Driven-Urban-Expansion-Mapping
relatedPublication: urban-expansion-jum-2025
---

The script trains the Random Forest model on GIS-derived factors, reports accuracy and the relative importance of each driver, and plots the ROC curve.
