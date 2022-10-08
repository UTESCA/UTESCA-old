import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./Pages/Home/Home";
import Project from "./Pages/Project/Project";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./tailwind.css";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import { StyledEngineProvider } from "@mui/material/styles";
const root = ReactDOM.createRoot(document.getElementById("root"));

const theme = createTheme({
  palette: {
    primary: {
      main: "#034694",
    },
  },
});

root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Router>
          <NavigationBar />

          <Routes>
            <Route path="*" element={<Home />} exact />
            <Route path="/project" element={<Project />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);
