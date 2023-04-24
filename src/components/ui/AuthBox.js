import React from "react";
import "./AuthBox.css";
export default function AuthBox(props) {
  const submitHandler = (e) => {
    e.preventDefault();
    props.handleSubmitForm();
  };
  return (
    <form onSubmit={submitHandler} className="auth-container" autoComplete="on">
      {props.children}
    </form>
  );
}
