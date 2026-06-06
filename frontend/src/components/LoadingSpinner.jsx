import React from 'react';

const LoadingSpinner = () => {
  return (
    <div 
      className="flex justify-center items-center h-screen w-full"
      role="status"
      aria-label="Loading"
    >
      <div className="w-10 h-10 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin" />
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default LoadingSpinner;