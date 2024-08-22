import React from 'react';
import './InputField.css';

const InputField = ({ label, type = "text", placeholder = "", extraInputs }) => {
  return (
    <div className="input-field">
      <label>{label}</label>
      <div className="input-wrapper">
        <input type={type} placeholder={placeholder} />
        {extraInputs && extraInputs.map((placeholder, index) => (
          <input key={index} type={type} placeholder={placeholder} />
        ))}
      </div>
    </div>
  );
};

export default InputField;
