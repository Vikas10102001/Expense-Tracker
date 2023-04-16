import React from "react";
import "./AuthBox.css";
export default function AuthBox(props) {
  return <div className="auth-container">{props.children}</div>;
}
