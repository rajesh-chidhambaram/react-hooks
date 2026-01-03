import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

function ThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === "light" ? "Dark" : "Light"} Theme
    </button>
  );
}

function UseContextLab() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`theme-box ${theme} lab-card`} >
        <h3 >useContext</h3>
        <br/>
        <p>
          useContext allows sharing theme data without prop drilling.
        </p>

        <ThemeButton />
      </div>
    </ThemeContext.Provider>
  );
}

export default UseContextLab;
