// src/components/ui/Alert.js
import React from 'react';

const Alert = ({ message, type = 'success' }) => {
  const alertStyles = {
    success: 'bg-green-100 text-green-800',
    error: 'bg-red-100 text-red-800',
    warning: 'bg-yellow-100 text-yellow-800',
  };

  return (
    <div className={`px-4 py-2 rounded-md ${alertStyles[type]} border`}>
      <strong>{message}</strong>
    </div>
  );
};

export default Alert;
