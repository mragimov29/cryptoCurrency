import { useEffect, useState } from "react";
import { connect, Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import InfoPage from "./pages/InfoPage/InfoPage";
import MainPage from "./pages/MainPage/MainPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import { initFavorites } from "./redux/actions/actions";

const mapDispatchToProps = (dispatch) => ({
  initFavorites: (data) => dispatch(initFavorites(data)),
});

function App({ initFavorites }) {
  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((res) => {
        initFavorites(res.favorites);
      });
  }, []);

  return (
    
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/:id" element={<InfoPage />}></Route>
          <Route path="/profile" element={<ProfilePage />}></Route>
        </Routes>
      </div>
  );
}

export default connect(null, mapDispatchToProps)(App);
