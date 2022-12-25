import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import InfoPage from "./pages/InfoPage/InfoPage";
import MainPage from "./pages/MainPage/MainPage";
import store from "./redux/reduser/store";
// import SignInForm from "./pages/SignInForm/SignInForm";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/:id" element={<InfoPage />}></Route>
          {/* <Route path="/signin" element={<SignInForm />}></Route> */}
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
