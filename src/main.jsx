import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";
import favicon from "./assets/favicon.png";

// Set favicon
const link =
  document.querySelector("link[rel*='icon']") ||
  document.createElement("link");

link.type = "image/png";
link.rel = "icon";
link.href = favicon;

document.head.appendChild(link);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);