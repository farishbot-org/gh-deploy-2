import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";

import "./index.css";

import App from "./App";

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  const container = document.getElementById("root");
  hydrateRoot(container, <App />);
} else {
  const container = document.getElementById("root");
  const root = createRoot(container);
  root.render(<App />);
}
