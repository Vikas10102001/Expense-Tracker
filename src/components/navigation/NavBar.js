import React from "react";
import "./NavBar.css";
import "../../App.css";
import { auth } from "../../firebase";
export default function NavBar() {
  const handleLogout = async () => {
    try {
      await auth.signOut();
    } catch (er) {
      console.log(er);
    }
  };
  return (
    <div className="nav-bar">
      <span className="logo">
        <a href="Home">Expense Tracker</a>
      </span>
      <button className="login-signup-logout-button" onClick={handleLogout}>
        logout
      </button>
    </div>
  );
}
