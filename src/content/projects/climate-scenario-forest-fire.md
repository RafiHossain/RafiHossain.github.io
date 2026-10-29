---
title: Climate-Scenario Forest Fire Risk Projection (2040–2100)
category: research
order: 2
featured: true
summary: Ensemble tree-based models that assess current forest fire susceptibility in the Chittagong Hill Tracts and project future fire risk under RCP climate scenarios for 2040–2100.
problem: Fire risk depends on climate, so maps built on present-day conditions alone may understate where risk will grow. Planning needs projections of how susceptible zones shift under future climate.
methods:
  - Random Forest, LightGBM, XGBoost, AdaBoost, CatBoost, Bagging, Gradient Boosting and Decision Tree classifiers
  - 19 conditioning factors, including aridity index, climatic water deficit, LAI, NDVI, NDMI, NDWI, NDBI, LST, evapotranspiration, rainfall, humidity, temperature, wind speed and terrain
  - Projection of susceptibility under RCP scenarios for 2040–2100
  - ROC/AUC evaluation and feature importance
tools: [Python, scikit-learn, LightGBM, XGBoost, CatBoost, pandas, matplotlib]
repo: https://github.com/RafiHossain/Climate-Scenario-Fore-Fire-Risk-Modeling
relatedPublication: forest-fire-climate-2025
---

Each model is a separate script with the same 70/30 train–test design, so accuracy, AUC and factor importance can be compared directly across algorithms before the selected models are applied to future climate layers.
