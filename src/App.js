import { useContext } from "react";

import Router from "./Router";
import { GlobalStyle } from "./styles/Global.styles";
import { ThemeProvider } from "styled-components";
import { ThemeContext } from "./context/ThemeContext";
import { lightTheme, darkTheme } from "./styles/Theme.styles";
import "./App.css";

function App() {
  const { theme } = useContext(ThemeContext);

  const mode = theme === "light" ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={mode}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;
