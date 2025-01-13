// src/components/ui/Input.js
import React from 'react';

const Input = ({ type = 'text', placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="px-4 py-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-cyan-500"
    />
  );
};

export default Input;
