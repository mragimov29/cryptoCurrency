import React from "react";
import SearchLine from "../SearchLine/SearchLine";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <h1 className="header-title">Crypto</h1>
      <div className="header-interactive">
        <div className="header-pages">
          <button className="header-button">
            <h2>Main Page</h2>
          </button>
          <button className="header-button">
            <h2>Profile</h2>
          </button>
        </div>
        <SearchLine />
      </div>
    </header>
  );
}
