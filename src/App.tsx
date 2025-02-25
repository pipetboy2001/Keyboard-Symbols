import React from "react";
import CategoryList from "./components/CategoryList";
import { useTheme } from "./context/ThemeContext";

const App: React.FC = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div className={`app-container ${darkMode ? "dark" : ""}`}>
      <button className="theme-toggle" onClick={toggleDarkMode}>
        {darkMode ? "☀️ Modo Claro" : "🌙 Modo Oscuro"}
      </button>
      <h1 className="text-center">Keyboard Symbols Archive</h1>
      <CategoryList />
    </div>
  );
};

export default App;
