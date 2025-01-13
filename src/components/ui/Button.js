// src/components/ui/Button.js
import React from 'react';

const Button = ({ onClick, children, type = 'button', className = '' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-6 py-2 bg-cyan-500 text-white rounded-md hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-300 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
