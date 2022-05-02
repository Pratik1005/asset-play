import {useContext, createContext, useState, useEffect} from "react";

const ThemeContext = createContext();

const themeState = localStorage.getItem("themeState");

const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState("light-theme");

  themeState &&
    useEffect(() => {
      setTheme(themeState);
    }, []);

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export {ThemeProvider, useTheme};
