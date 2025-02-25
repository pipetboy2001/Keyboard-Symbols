import React from "react";

interface CategoryProps {
    title: string;
    symbols: string[];
}

const Category: React.FC<CategoryProps> = ({ title, symbols }) => {
    const copyToClipboard = (symbol: string) => {
        navigator.clipboard.writeText(symbol)
            .then(() => {
                const toast = document.createElement('div');
                toast.classList.add('copy-toast');
                toast.textContent = 'Copied!';
                document.body.appendChild(toast);

                setTimeout(() => {
                    toast.remove();
                }, 1500);
            })
            .catch(err => console.error('Failed to copy: ', err));
    };

    return (
        <div className="category-container">
            <div className="category-header">
                <div className="pill-button">
                    <div className="pill-outer">
                        <div className="pill-inner">
                            <span className="pill-text">{title}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="symbol-grid">
                {symbols.map((symbol, index) => (
                    <button
                        key={index}
                        className="symbol-button"
                        onClick={() => copyToClipboard(symbol)}
                    >
                        {symbol}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Category;