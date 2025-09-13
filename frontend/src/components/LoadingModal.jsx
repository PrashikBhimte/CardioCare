
const LoadingModal = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-gray-800 rounded-lg shadow-lg p-8 max-w-md w-full flex flex-col items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
        <p className="text-white text-lg mt-4">Processing...</p>
      </div>
    </div>
  );
};

export default LoadingModal;
