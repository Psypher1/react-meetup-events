import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { FavouritesContextProvider } from "./store/favourites-context";

ReactDOM.render(
  <FavouritesContextProvider>
    <Router>
      <App />
    </Router>
  </FavouritesContextProvider>,
  document.getElementById("root")
);
