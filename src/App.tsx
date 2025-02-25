import { useEffect } from "react";
import { useTheme } from "./context/ThemeContext";
import CategoryList from "./components/CategoryList";
import HeaderApp from "./components/Header";

const App: React.FC = () => {
  const { darkMode } = useTheme();

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <>
      <HeaderApp />
      <div className="app-container">
        <h2 className="text-center" style={{
          fontFamily: 'Comic Sans MS, cursive, sans-serif',
          fontSize: '1.25rem',
          margin: '20px 0'
        }}>
          Click on the symbols to copy!
        </h2>
        <CategoryList />
      </div>
    </>
  );
};

export default App;
