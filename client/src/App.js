import { Route, Routes } from "react-router-dom";
import "./App.css";
import InfoPage from "./pages/InfoPage/InfoPage";
import MainPage from "./pages/MainPage/MainPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import { initFavorites } from "./redux/actions/actions";


function App() {
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

export default App;
