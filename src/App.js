import { Provider } from "react-redux";
import "./App.css";
import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage";
import store from "./redux/reduser/store"

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <MainPage />
      </div>
    </Provider>
  );
}

export default App;
