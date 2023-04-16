import React from "react";
import "./CustomInput.css";
export default function CustomInput({ label, id, value, onChange, type }) {
  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      <input type={type} onChange={onChange} value={value} />
    </div>
  );
}
