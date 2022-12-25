import { signInWithPopup } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth, provider } from "../..";
import SearchLine from "../SearchLine/SearchLine";
import "./Header.css";

export default function Header() {
  const [value, setValue] = useState("");
  const handleClick = () => {
    if (value) {localStorage.clear();
    window.location.reload();}
    else {
      signInWithPopup(auth, provider).then((data) => {
        setValue(data.user.email);
        localStorage.setItem("email", data.user.email);
      });
    }
  };

  useEffect(() => {
    setValue(localStorage.getItem("email"));
    console.log(value);
  });

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
        <button className="header-button sing-in" onClick={handleClick}>
          {value ? "Log out" : "Sign In"}
        </button>
        
      </div>
    </header>
  );
}
