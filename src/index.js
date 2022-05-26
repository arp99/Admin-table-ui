import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { UserDataProvider } from "./Context/userDataContext";
import { SearchProvider } from "./Context/searchContext";

ReactDOM.render(
  <React.StrictMode>
    <SearchProvider>
      <UserDataProvider>
        <App />
      </UserDataProvider>
    </SearchProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
