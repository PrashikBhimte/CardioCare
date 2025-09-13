import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-white">
            CardioCare
          </Link>
          <div className="space-x-6">
            <Link
              to="/"
              className="text-gray-300 hover:text-white transition duration-300"
            >
              Home
            </Link>
            <Link
              to="/predict"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
            >
              Get Prediction
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;