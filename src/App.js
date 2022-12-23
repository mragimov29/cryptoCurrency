import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import InfoPage from "./pages/InfoPage/InfoPage";
import MainPage from "./pages/MainPage/MainPage";
import store from "./redux/reduser/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/:id" element={<InfoPage />}></Route>
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
