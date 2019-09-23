import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
//import "./state-drills/HelloWorld";
//import "./state-drills/Bomb";
//import "./state-drills/RouletteGun";
import AppLang from "./lang-context/AppLang";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

/*
  <BrowserRouter>
    <App />
  </BrowserRouter>
   */
