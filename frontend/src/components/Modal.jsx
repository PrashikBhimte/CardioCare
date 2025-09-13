
const Modal = ({ result, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-gray-800 rounded-lg shadow-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-white text-center mb-4">
          Prediction Result
        </h2>
        <div className="text-center text-lg text-white">
          <p className="mb-2">
            The prediction is:{" "}
            <span
              className={result.prediction === 1 ? "text-red-500" : "text-green-500"}
            >
              {result.prediction === 1 ? "Diabetic" : "Not Diabetic"}
            </span>
          </p>
          <p>
            Probability of being Diabetic:{" "}
            <span className="font-bold">
              {(result.prediction_probability["1"] * 100).toFixed(2)}%
            </span>
          </p>
          <p>
            Probability of not being Diabetic:{" "}
            <span className="font-bold">
              {(result.prediction_probability["0"] * 100).toFixed(2)}%
            </span>
          </p>
        </div>
        <button
          onClick={onClose}
          className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
