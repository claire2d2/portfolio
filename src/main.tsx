import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import SettingsContextWrapper from "./context/SettingsContextWrapper.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <SettingsContextWrapper>
        <App />
      </SettingsContextWrapper>
    </BrowserRouter>
  </React.StrictMode>
);
