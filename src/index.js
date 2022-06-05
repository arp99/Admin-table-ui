import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { UserDataProvider } from "./Context/userDataContext";
import { SearchProvider } from "./Context/searchContext";
import { FilterDataProvider } from "./Context/filterContext";
import { ThemeProvider } from "./Context/themeContext";

ReactDOM.render(
  <React.StrictMode>
    <SearchProvider>
      <UserDataProvider>
        <FilterDataProvider>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </FilterDataProvider>
      </UserDataProvider>
    </SearchProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
