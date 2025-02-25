import React from 'react';
import { useTheme } from "../context/ThemeContext";

const HeaderApp: React.FC = () => {
    const { darkMode, toggleDarkMode } = useTheme();

    return (
        <header className='navbar' aria-label="Main Header">
            <div className='header-logo'>
                <img
                    src="/logos/logo-transparent.png"
                    alt="Keyboard Symbols Logo"
                />
            </div>

            {/* Botón de cambio de tema dentro del Header */}
            <button className="theme-toggle" onClick={toggleDarkMode}>
                {darkMode ? "☀️ Light" : "🌙 Dark"}
            </button>
        </header>
    );
};

export default HeaderApp;
