import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface CategoryProps {
    title: string;
    symbols: string[];
}

const Category: React.FC<CategoryProps> = ({ title, symbols }) => {
    const [expanded, setExpanded] = useState(false);
    const [maxVisible, setMaxVisible] = useState(10);

    // Ajustar la cantidad visible según el tamaño de pantalla
    useEffect(() => {
        const updateMaxVisible = () => {
            setMaxVisible(window.innerWidth < 600 ? 6 : 12);
        };
        updateMaxVisible();
        window.addEventListener("resize", updateMaxVisible);
        return () => window.removeEventListener("resize", updateMaxVisible);
    }, []);

    const copyToClipboard = (symbol: string) => {
        navigator.clipboard.writeText(symbol)
            .then(() => alert("Copiado!")) // Aquí puedes mejorar con un toast
            .catch(err => console.error("Error al copiar: ", err));
    };

    const visibleSymbols = expanded ? symbols : symbols.slice(0, maxVisible);
    const shouldShowToggle = symbols.length > maxVisible;

    return (
        <div className="category-container">
            {/* Header con mejor diseño */}
            <div className="category-header">
                <button className="pill-button" onClick={() => setExpanded(!expanded)}>
                    <span className="pill-text">
                        {title} {shouldShowToggle && (expanded ? "▲" : "▼")}
                    </span>
                </button>
            </div>

            {/* Animación al expandir */}
            <motion.div
                className="symbol-grid"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }}
            >
                {visibleSymbols.map((symbol, index) => (
                    <button key={index} className="symbol-button" onClick={() => copyToClipboard(symbol)}>
                        {symbol}
                    </button>
                ))}
            </motion.div>

            {/* Botón "Ver más" con mejor estilo y alineación */}
            {shouldShowToggle && (
                <button className="toggle-button" onClick={() => setExpanded(!expanded)}>
                    {expanded ? "See less ▲" : "see more ▼"}
                </button>
            )}
        </div>
    );
};

export default Category;
