import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./services/profileModel.js";

const root = createRoot(document.getElementById("root")); // Utiliser createRoot directement
root.render(<App />);
