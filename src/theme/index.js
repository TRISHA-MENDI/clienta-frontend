// src/theme/index.js
import { createTheme } from "@mui/material/styles";
import { createContext } from "react";

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            background: {
              default: "#f5f6fa",
              paper: "#ffffff",
            },
            text: {
              primary: "#000000",
            },
          }
        : {
            background: {
              default: "#121212",
              paper: "#1e1e1e",
            },
            text: {
              primary: "#ffffff",
            },
          }),
    },
  });
