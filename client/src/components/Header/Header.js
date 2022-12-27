import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SearchLine from "../SearchLine/SearchLine";
import { connect } from "react-redux";
import { setAcc } from "../../redux/actions/actions";
import "./Header.css";
import MobileMenu from "../MobileMenu/MobileMenu";
import SignInButton from "../SingInButton/SignInButton";

const mapStateToProps = (state) => {
  return {
    value: state.value,
  };
};

function Header({ value }) {
  const alertClick = () => {
    alert("You are not signed in");
  };

  useEffect(() => {
    window.addEventListener("resize", (e) => {
      if (e.target.innerWidth > 900)
        document.querySelector(".mobile-menu").style.display = "none";
    });
  });
  
  const openMenu = () => {
    if (document.querySelector(".mobile-menu").style.display === "none")
      document.querySelector(".mobile-menu").style.display = "flex";
    else document.querySelector(".mobile-menu").style.display = "none";
  };

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
          {value ? (
            <Link to="/profile">
              <button className="header-button">
                <h2>Profile</h2>
              </button>
            </Link>
          ) : (
            <button className="header-button" onClick={alertClick}>
              <h2>Profile</h2>
            </button>
          )}
        </div>
        <div className="ser-sig-but">
          <SearchLine />
          <div className="head-but-sign">
            <SignInButton />
          </div>
        </div>
        <button className="header-button header-button-menu" onClick={openMenu}>
          | | |
        </button>
      </div>
      <MobileMenu />
    </header>
  );
}

export default connect(mapStateToProps)(Header);
