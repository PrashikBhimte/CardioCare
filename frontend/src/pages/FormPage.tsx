import { useState } from "react";
import Modal from "../components/Modal";

const FormPage = () => {
  const [formData, setFormData] = useState({
    Pregnancies: "",
    Glucose: "",
    BloodPressure: "",
    SkinThickness: "",
    Insulin: "",
    BMI: "",
    DiabetesPedigreeFunction: "",
    Age: "",
  });
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setResult(null);

    const fieldsToValidate = [
      "Glucose",
      "BloodPressure",
      "SkinThickness",
      "Insulin",
      "BMI",
      "DiabetesPedigreeFunction",
      "Age",
    ];

    for (const field of fieldsToValidate) {
      if (!formData[field] || parseFloat(formData[field]) <= 0) {
        setError(
          `Please enter a valid value for ${field}. It cannot be zero or empty.`
        );
        return;
      }
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/predict`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const data = await response.json();
      setResult(data);
      setIsModalOpen(true);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setResult(null);
  };

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="container mx-auto p-4 md:p-8 max-w-4xl">
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 md:p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
            Diabetes Prediction Form
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.keys(formData).map((key) => (
                <div key={key}>
                  <label htmlFor={key} className="text-white block mb-2">
                    {key.replace(/([A-Z])/g, " $1").trim()}
                  </label>
                  <input
                    type="number"
                    name={key}
                    id={key}
                    value={formData[key]}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    step={
                      key === "BMI" || key === "DiabetesPedigreeFunction"
                        ? "0.1"
                        : "1"
                    }
                  />
                </div>
              ))}
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg text-lg transition duration-300"
            >
              Predict
            </button>
          </form>
          {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
        </div>
      </div>
      {isModalOpen && result && (
        <Modal result={result} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default FormPage;