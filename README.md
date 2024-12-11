# Loan Default Prediction Project

## Overview

This project aims to predict loan default statuses using Exploratory Data Analysis (EDA) and Machine Learning (ML) techniques. The repository is divided into three main tasks:

- **Task 1**: Exploratory Data Analysis (EDA)
- **Task 2**: Machine Learning Pipeline
- **Task 3**: Model Comparison

---

## Task 1: Exploratory Data Analysis (EDA)

The EDA process involves detailed visualizations to uncover patterns and trends in the dataset. The code for this task is available in the `eda.ipynb` file.

### Key Visualizations

1. **Scatter Plot**:  
   Visualizes the relationship between annual income and loan amount, with points colored by home ownership status.
   
2. **Stacked Bar Chart**:  
   Displays the proportion of loan statuses (approved, declined) for each loan purpose.
   
3. **CIBIL Score Distribution**:  
   Shows the distribution of CIBIL scores for different loan statuses, highlighting differences between approved and declined loans.
   
4. **Loan Amount Distribution**:  
   Illustrates the distribution of loan amounts across different loan terms and statuses.
   
5. **Loan Status by Home Ownership**:
   - Count of loan statuses across different home ownership categories.
   - Proportion of loan statuses (approved, declined) within each home ownership category.

6. **Correlation Heatmap**:  
   Visualizes relationships between numerical features in the dataset, with color intensity indicating the strength of correlations.

---

## Task 2: Machine Learning Pipeline

This repository includes a modular, object-oriented Python script for building, training, and evaluating machine learning models. The pipeline supports the following classification models:

- **XGBoost**
- **Logistic Regression**
- **Random Forest**

### Code: `model_.py`

The script provides the following features:

- **Load Data**:  
   The `load()` method loads and preprocesses training and testing datasets from Excel files. It includes feature engineering and encoding of categorical variables.
   
- **Preprocessing**:  
   The `preprocess()` method standardizes the features using `StandardScaler`.
   
- **Model Training**:  
   The `train()` method fits the training data and tunes hyperparameters (for XGBoost).
   
- **Model Evaluation**:  
   The `test()` method evaluates model performance, displaying metrics such as accuracy, ROC-AUC, F1-score, classification report, and confusion matrix.
   
- **Inference**:  
   The `predict()` method makes predictions using the trained model on the test set.

### Usage

1. **Load Data**:  
   Use the `load()` method with paths to training and test data.
   
2. **Preprocess Data**:  
   Preprocess the data using the `preprocess()` method.
   
3. **Train Model**:  
   Train the desired model with the `train()` method.
   
4. **Evaluate Model**:  
   Evaluate the model's performance with the `test()` method.
   
5. **Predict**:  
   Use the `predict()` method for making predictions on the test set.

---

## Task 3: Model Comparison

The project compares the following models:

- **Logistic Regression** with L2 Regularization
- **Random Forest**
- **XGBoost**

### Code: `model_selection.ipynb`

This notebook contains the comparison and evaluation of the models. It compares their performance across various metrics.

### Model Performance

| Metric            | Logistic Regression | Random Forest | XGBoost    |
|-------------------|---------------------|---------------|------------|
| **Accuracy**      | 0.6744              | 0.6778        | 0.6805     |
| **ROC-AUC**       | 0.6933              | 0.6996        | 0.6958     |
| **F1-Score**      | 0.7756              | 0.7867        | 0.7761     |
| **Precision (Class 0)** | 0.60           | 0.65          | 0.60       |
| **Recall (Class 1)**    | 0.88           | 0.93          | 0.87       |

---

### Confusion Matrices

#### Logistic Regression

|                    | Predicted: 0 | Predicted: 1 |
|--------------------|--------------|--------------|
| **Actual: 0**      | 945          | 2110         |
| **Actual: 1**      | 643          | 4757         |

#### Random Forest

|                    | Predicted: 0 | Predicted: 1 |
|--------------------|--------------|--------------|
| **Actual: 0**      | 708          | 2347         |
| **Actual: 1**      | 377          | 5023         |

#### XGBoost

|                    | Predicted: 0 | Predicted: 1 |
|--------------------|--------------|--------------|
| **Actual: 0**      | 1073         | 1982         |
| **Actual: 1**      | 719          | 4681         |

---

## Why XGBoost?

XGBoost outperformed other models on the given dataset due to the following reasons:

- **Imbalanced Data Handling**:  
   Effectively manages class imbalance using the `scale_pos_weight` parameter.
   
- **Non-Linear Relationships**:  
   Captures complex, non-linear relationships between features (e.g., loan amount, CIBIL score) that Logistic Regression cannot.
   
- **Feature Importance**:  
   Provides insights into key features driving defaults (e.g., annual income, loan amount).
   
- **Handles Missing Values**:  
   Automatically deals with missing values, reducing preprocessing effort.
   
- **Regularization**:  
   Includes L2 regularization to prevent overfitting and ensure better generalization.
   
- **Efficiency**:  
   Optimized for speed and scalability, suitable for large datasets.
   
- **Hyperparameter Tuning**:  
   Extensive tuning options to maximize performance.

---

## Conclusion

This project demonstrates the power of EDA and Machine Learning techniques for predicting loan default statuses. XGBoost, with its superior handling of imbalanced, non-linear data, emerged as the best-performing model. The pipeline is designed to be extendable and adaptable to different datasets and models.
