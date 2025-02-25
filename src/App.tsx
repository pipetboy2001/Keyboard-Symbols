import React from "react";
import CategoryList from "./components/CategoryList";
import HeaderApp from "./components/Header";
import { useTheme } from "./context/ThemeContext";

const App: React.FC = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <>
      {/* Sacamos el Header para que ocupe toda la pantalla */}
      <HeaderApp />
      <div className={`app-container ${darkMode ? "dark-mode" : ""}`}>
        <button className="theme-toggle" onClick={toggleDarkMode}>
          {darkMode ? "☀️ Modo Claro" : "🌙 Modo Oscuro"}
        </button>
        <h2 className="text-center" style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif', fontSize: '1.25rem' }}>
          Clics on the symbol to copy!
        </h2>
        <CategoryList />
      </div>
    </>
  );
};

export default App;
