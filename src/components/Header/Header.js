import React from "react";
import { Link } from "react-router-dom";
import SearchLine from "../SearchLine/SearchLine";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <h1 className="header-title">Crypto</h1>
      <div className="header-interactive">
        <div className="header-pages">
          <Link to="/">
            <button className="header-button">
              <h2>Main Page</h2>
            </button>
          </Link>
          <button className="header-button">
            <h2>Profile</h2>
          </button>
        </div>
        <SearchLine />
        <Link to="/signin">
          <button className="header-button sing-in">Sign In</button>
        </Link>
      </div>
    </header>
  );
}
