import { ThemeProvider } from "styled-components";
import { THEMES } from "./theme/theme";
import { useState } from "react";
import styled from "styled-components";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  console.log(THEMES.dark);
  const Section = styled.section`
    width: 100vw;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.mainText};
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 40vh;
    box-sizing: border-box;
    span:hover {
      cursor: pointer;
    }
  `;

  return (
    <ThemeProvider theme={THEMES[themeMode]}>
      <Section>
        <span>
          <span onClick={() => setThemeMode("light")}>☀️</span>
          <span onClick={() => setThemeMode("dark")}>🌙</span>
        </span>
        <h1>&#128038;TIUÍ&#128038;</h1>
      </Section>
    </ThemeProvider>
  );
}

export default App;
