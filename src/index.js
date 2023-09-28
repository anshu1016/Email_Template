import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { EmailContextProvider } from "./context/EmailContext";
import { BrowserRouter as Router } from "react-router-dom";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Router>
      <EmailContextProvider>
        <App />
      </EmailContextProvider>
    </Router>
  </StrictMode>
);
