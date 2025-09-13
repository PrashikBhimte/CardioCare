
# Diabetes Diagnosis System

This project is a web-based application for diagnosing diabetes based on a machine learning model. The system takes user input for various health parameters and predicts the likelihood of the user having diabetes.

## Overview

The project consists of three main parts:
1.  **Machine Learning Model:** A Random Forest Classifier trained on the PIMA Indians Diabetes Database to predict diabetes.
2.  **Backend API:** A FastAPI server that exposes the machine learning model through a REST API.
3.  **Frontend Application:** A React-based single-page application that provides a user-friendly interface for interacting with the system.

## Project Structure

```
.
├── frontend/         # React frontend application
├── model_training/   # Jupyter notebook and data for model training
├── server/           # FastAPI backend server
├── trained_model/    # Saved machine learning model and scaler
└── venv/             # Python virtual environment
```

## Getting Started

### Prerequisites

- Python 3.10+
- Node.js and npm

### Installation

1.  **Backend:**
    - Navigate to the `server` directory.
    - Create and activate a virtual environment.
    - Install the required Python packages:
      ```bash
      pip install -r requirements.txt
      ```

2.  **Frontend:**
    - Navigate to the `frontend` directory.
    - Install the required npm packages:
      ```bash
      npm install
      ```

## Usage

1.  **Run the Backend API:**
    - Navigate to the `server` directory.
    - Run the FastAPI server:
      ```bash
      uvicorn main:app --reload
      ```
    - The API will be available at `http://127.0.0.1:8000`.

2.  **Run the Frontend Application:**
    - Navigate to the `frontend` directory.
    - Start the React development server:
      ```bash
      npm run dev
      ```
    - The application will be available at `http://localhost:5173`.

## Model Training

The machine learning model is trained in the `model_training/main.ipynb` Jupyter notebook. The notebook covers the following steps:
- Data loading and cleaning
- Exploratory Data Analysis (EDA)
- Feature engineering and preprocessing
- Model training (Logistic Regression, Random Forest)
- Hyperparameter tuning using GridSearchCV
- Model evaluation and selection
- Saving the trained model and scaler

The final trained model (`diabetes_model.joblib`) and the scaler (`scaler.joblib`) are saved in the `trained_model` directory.
