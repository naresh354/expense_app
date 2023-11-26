import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "styles/index.css";
import { BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")!).render(
  // Render your App component wrapped in BrowserRouter for routing
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
