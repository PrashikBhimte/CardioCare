
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import joblib
import numpy as np

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

# Load the model and scaler
model = joblib.load('../trained_model/diabetes_model.joblib')
scaler = joblib.load('../trained_model/scaler.joblib')

class Features(BaseModel):
    Pregnancies: int
    Glucose: int
    BloodPressure: int
    SkinThickness: int
    Insulin: int
    BMI: float
    DiabetesPedigreeFunction: float
    Age: int

@app.get("/")
def read_root():
    return {"message": "Welcome to the Diabetes Prediction API"}

@app.post("/predict")
def predict(features: Features):
    try:
        # Convert input features to a numpy array
        input_data = np.array([[
            features.Pregnancies,
            features.Glucose,
            features.BloodPressure,
            features.SkinThickness,
            features.Insulin,
            features.BMI,
            features.DiabetesPedigreeFunction,
            features.Age
        ]])

        # Scale the input data
        scaled_data = scaler.transform(input_data)

        # Make prediction
        prediction = model.predict(scaled_data)
        prediction_proba = model.predict_proba(scaled_data)

        return {
            "prediction": int(prediction[0]),
            "prediction_probability": {
                "0": prediction_proba[0][0],
                "1": prediction_proba[0][1]
            }
        }
    except Exception as e:
        return {"error": str(e)}
