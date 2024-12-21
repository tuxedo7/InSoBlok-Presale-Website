import React from "react";
import ReactDOM from "react-dom/client";
import "./Polyfills";
import Rainbowkit from "./Rainbowkit.jsx";
import { ThemeProvider } from "styled-components";
import ThemeStyles from "./assets/styles/ThemeStyles";
import GlobalStyles from "./assets/styles/GlobalStyles";
import PresaleContextProvider from "./utils/PresaleContextProvider.jsx";
import ModalContextProvider from "./utils/ModalContextProvider.jsx";
import App from "./App.jsx";

// bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";

// slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Rainbowkit>
      <ThemeProvider theme={ThemeStyles}>
        <GlobalStyles />
        <PresaleContextProvider>
          <ModalContextProvider>
            <App />
          </ModalContextProvider>
        </PresaleContextProvider>
      </ThemeProvider>
    </Rainbowkit>
  </React.StrictMode>
);
