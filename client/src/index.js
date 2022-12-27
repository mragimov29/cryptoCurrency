import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { Provider } from "react-redux";
import store from "./redux/reduser/store";

const app = initializeApp({
  apiKey: "AIzaSyDU1JFp0KIVL7ERDp3cAqJVKmUXnYDElXo",
  authDomain: "cryptocurrency-react.firebaseapp.com",
  projectId: "cryptocurrency-react",
  storageBucket: "cryptocurrency-react.appspot.com",
  messagingSenderId: "339949966017",
  appId: "1:339949966017:web:647ccf45688cb12a197a40",
});

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
