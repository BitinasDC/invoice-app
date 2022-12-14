import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import AppLogin from "./AppLogin";
import "../src/index.css";
import SecurityApp from "./security/SecurityApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AppLogin />
  </BrowserRouter>
);
