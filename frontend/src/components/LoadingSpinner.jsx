import React from 'react';

const LoadingSpinner = () => {
  return (
    <div 
      className="flex justify-center items-center h-screen w-full"
      role="status"
      aria-label="Loading"
    >
      <div className="w-12 h-12 border-4 border-gray-300 border-t-indigo-600 rounded-full animate-spin shadow-lg" />
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default LoadingSpinner;