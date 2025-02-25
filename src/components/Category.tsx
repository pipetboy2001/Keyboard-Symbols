import React from 'react';
import SymbolButton from './SymbolButton';

interface CategoryProps {
    title: string;
    symbols: string[];
}

const Category: React.FC<CategoryProps> = ({ title, symbols }) => {
    return (
        <div className="category-container text-center mb-4">
            <h2 className="category-title">{title}</h2>
            <div className="symbol-grid">
                {symbols.map((symbol, index) => (
                    <SymbolButton key={index} symbol={symbol} />
                ))}
            </div>
        </div>
    );
};

export default Category;
