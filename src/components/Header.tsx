import React from 'react';

const Header: React.FC = () => {

    return (
        <header className='navbar' aria-label="Main Header">
            <nav>
                <div className='header-logo'>
                    <img
                        src="/logos/logo-transparent.png"
                        alt="Keyboard Symbols Logo"
                    />
                </div>
            </nav>
        </header>
    );
};

export default Header;
