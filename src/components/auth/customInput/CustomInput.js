import React from "react";
import "./CustomInput.css";
export default function CustomInput({
  label,
  id,
  value,
  onChange,
  type,
  isValid,
  onBlur,
  autoComplete,
  name,
}) {
  return (
    <div className={`input-container ${isValid === false ? "invalid" : ""}`}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
        autoComplete={autoComplete}
        name={name}
      />
    </div>
  );
}
