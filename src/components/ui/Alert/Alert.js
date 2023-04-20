import React from "react";
import "./Alert.css"
export default function Alert({ message }) {
  return (
    <div className="alertContainer">
      <span className="alertMessage">‼️  {message}  ‼️</span>
    </div>
  );
}
