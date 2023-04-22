import React from "react";
import "./Alert.css";
export default function Alert({ message, variant }) {
  return (
    <div className={`alertContainer ${variant}`}>
      <span className="alertMessage">{message} </span>
    </div>
  );
}
