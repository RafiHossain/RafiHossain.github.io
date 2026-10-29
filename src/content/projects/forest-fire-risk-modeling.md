---
title: Forest Fire Susceptibility Modeling in the Chittagong Hill Tracts
category: research
order: 1
featured: true
summary: Machine learning and deep learning models that predict forest fire susceptibility in the Chittagong Hill Tracts from environmental and human factors, to help prioritize risk zones for forest management.
problem: Forest fires in the Chittagong Hill Tracts degrade forest cover and livelihoods, but fire-prone areas are not mapped systematically, which makes prevention hard to target.
methods:
  - Susceptibility modeling with CatBoost, Random Forest, SVM, XGBoost, GBDT and CART
  - Neural network models (ANN, DNN, CNN)
  - ROC/AUC evaluation and factor importance analysis
tools: [Python, scikit-learn, pandas, matplotlib]
repo: https://github.com/RafiHossain/Forest-Fire-Risk-Modeling
relatedPublication: forest-fire-2024
---

The repository holds one script per model. Each script trains a classifier on a table of conditioning factors, reports accuracy and variable importance, and plots the ROC curve. The ANN, DNN and CNN scripts also export importance scores, so the deep learning models can be compared with the tree-based ones.
