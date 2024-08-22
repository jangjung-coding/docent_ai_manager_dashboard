import React from 'react';
import './InputField.css';

const InputField = ({ label, name, type = "text", onChange }) => (
  <div className="input-field">
    <label>{label}</label>
    {type === "textarea" ? (
      <textarea name={name} onChange={onChange}></textarea>
    ) : (
      <input type={type} name={name} onChange={onChange} />
    )}
  </div>
);

export default InputField;
