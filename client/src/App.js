import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import InfoPage from "./pages/InfoPage/InfoPage";
import MainPage from "./pages/MainPage/MainPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import store from "./redux/reduser/store";

function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('/api')
    .then(response => response.json())
    .then(res => {
      console.log(res.mes);
      setData(res.mes)
    });
  }, []);

  return (
    <Provider store={store}>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/:id" element={<InfoPage />}></Route>
          <Route path="/profile" element={<ProfilePage />}></Route>
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
