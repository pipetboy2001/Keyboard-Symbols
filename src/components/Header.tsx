import React from 'react';
import { useTheme } from "../context/ThemeContext";

const HeaderApp: React.FC = () => {
    const { darkMode, toggleDarkMode } = useTheme();

    return (
        <header className='navbar' aria-label="Main Header">
            <div className='logo-container'>
                {/* <div className='header-logo'>
                    <img
                        src="/logos/logo-transparent.png"
                        alt="Keyboard Symbols Logo"
                    />
                </div> */}
            </div>

            {/* The site name/title could go here */}
            <div className="site-title">
                Keyboard Symbols
            </div>

            {/* Theme toggle button in header */}
            <button className="theme-toggle" onClick={toggleDarkMode}>
                {darkMode ? "☀️" : "🌙"}
            </button>
        </header>
    );
};

export default HeaderApp;