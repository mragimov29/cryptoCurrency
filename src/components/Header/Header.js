import { signInWithPopup } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth, provider } from "../..";
import SearchLine from "../SearchLine/SearchLine";
import { connect } from "react-redux";
import { setAcc } from "../../redux/actions/actions";
import "./Header.css";


const mapStateToProps = (state) => {
  return {
    value: state.value
  };
};

const mapDispatchToProps = (dispatch) => ({
  setAcc: (value) => dispatch(setAcc(value)),
});

function Header({ value, setAcc }) {
  const handleClick = () => {
    if (value) {
      localStorage.clear();
      window.location.reload();
    }
    else {
      signInWithPopup(auth, provider).then((data) => {
        setAcc(data.user.email);
        localStorage.setItem("email", data.user.email);
      });
    }

  };

  useEffect(() => {
    setAcc(localStorage.getItem("email"));
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);