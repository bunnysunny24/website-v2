import React from 'react';

const Input = ({ type, name, value, onChange, className, placeholder, ...props }) => (
  <input
    type={type}
    name={name}
    value={value}
    onChange={onChange}
    className={className}
    placeholder={placeholder}
    {...props}
  />
);

export default Input;
