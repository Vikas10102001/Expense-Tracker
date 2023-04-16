import React from "react";
import "./NavBar.css";
export default function NavBar() {
  const handleLogout = () => {};
  return (
    <div className="nav-bar">
      <span className="logo">
        <a href="Home">Expense Tracker</a>
      </span>
      <button className="logout-button" onClick={handleLogout}>
        logout
      </button>
    </div>
  );
}
