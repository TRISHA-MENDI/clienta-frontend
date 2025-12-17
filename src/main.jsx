
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { ThemeProvider, CssBaseline } from "@mui/material";
import { useMemo, useState } from "react";
import { ColorModeContext, getTheme } from "./theme/index.js";

function Main() {
  const [mode, setMode] = useState("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prev) => (prev === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
