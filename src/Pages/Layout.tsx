import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { useState } from "react";
import { ITheme, ThemeContext, themes } from "../context/ThemeContext";

export const Layout = () => {
  const [theme, setTheme] = useState<ITheme>(themes.dark);

  const toogleTheme = () => {
    setTheme(theme.name === themes.dark.name ? themes.light : themes.dark);
  };

  return (
    <>
      <ThemeContext.Provider value={theme}>
        <main
          className="appContainer"
          style={{
            backgroundColor: theme.background,
          }}
        >
          <Navbar toggleTheme={toogleTheme}></Navbar>
          <Outlet></Outlet>
        </main>
      </ThemeContext.Provider>
    </>
  );
};
