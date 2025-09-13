import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to CardioCare</h1>
        <p className="text-xl mb-8">
          Your personal health companion for predicting the likelihood of
          diabetes.
        </p>
        <Link
          to="/predict"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300"
        >
          Get Your Prediction
        </Link>
      </div>

      {/* Features Section */}
      <div className="bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Features</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-gray-700 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">Instant Predictions</h3>
              <p>
                Get instant predictions on your diabetes risk based on your
                health data.
              </p>
            </div>
            <div className="p-6 bg-gray-700 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">High Accuracy</h3>
              <p>
                Our model is trained on a vast dataset to provide highly
                accurate predictions.
              </p>
            </div>
            <div className="p-6 bg-gray-700 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">User-Friendly</h3>
              <p>
                A simple and intuitive interface that makes it easy to get your
                prediction.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How it Works Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-500 mb-2">1</div>
              <h3 className="text-2xl font-bold mb-2">Enter Your Data</h3>
              <p>Fill out a simple form with your health metrics.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-500 mb-2">2</div>
              <h3 className="text-2xl font-bold mb-2">Get Prediction</h3>
              <p>Our model will process your data instantly.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-500 mb-2">3</div>
              <h3 className="text-2xl font-bold mb-2">View Results</h3>
              <p>See your prediction and the probability of diabetes.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2025 CardioCare. All rights reserved.</p>
          <p className="mt-2">
            Disclaimer: This is not a medical diagnosis. Consult a doctor for
            any health concerns.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;