// src/App.jsx
import React from "react";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { useState, useMemo } from "react";

import { ColorModeContext, getTheme } from "./theme";
import router from "./router"; // IMPORTANT: router is NOT a component. It is the router config object.

export default function App() {
  const [mode, setMode] = useState(
    localStorage.getItem("themeMode") || "light"
  );

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        const newMode = mode === "light" ? "dark" : "light";
        setMode(newMode);
        localStorage.setItem("themeMode", newMode);
      },
    }),
    [mode]
  );

  const theme = getTheme(mode);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        {/* The correct way for React Router */}
        <RouterProvider router={router} />

      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
