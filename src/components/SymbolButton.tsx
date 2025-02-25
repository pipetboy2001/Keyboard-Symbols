import React from 'react';

interface SymbolButtonProps {
    symbol: string;
}

const SymbolButton: React.FC<SymbolButtonProps> = ({ symbol }) => {
    const copyToClipboard = () => {
        navigator.clipboard.writeText(symbol);
        alert(`Copiado: ${symbol}`);
    };

    return (
        <button className="symbol-button btn btn-light m-2" onClick={copyToClipboard}>
            {symbol}
        </button>
    );
};

export default SymbolButton;
