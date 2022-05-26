import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { UserDataProvider } from "./Context/userDataContext";
import { SearchProvider } from "./Context/searchContext";
import { FilterDataProvider } from "./Context/filterContext";

ReactDOM.render(
  <React.StrictMode>
    <SearchProvider>
      <UserDataProvider>
        <FilterDataProvider>
          <App />
        </FilterDataProvider>
      </UserDataProvider>
    </SearchProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
