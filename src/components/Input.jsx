// Input.jsx
import React from 'react';

const Input = ({ label, id, type, value, onChange }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default Input;
