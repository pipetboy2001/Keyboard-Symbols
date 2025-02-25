import React, { useState, useEffect } from "react";
import Category from "./Category";

interface CategoryType {
    title: string;
    symbols: string[];
}

const CategoryList: React.FC = () => {
    const [categories, setCategories] = useState<CategoryType[]>([]);

    useEffect(() => {
        fetch("../../public/data/categories.json")
            .then((response) => response.json())
            .then((data) => setCategories(data))
            .catch((error) => console.error("Error loading categories:", error));
    }, []);

    return (
        <div className="category-list">
            {categories.length > 0 ? (
                categories.map((category, index) => (
                    <Category key={index} title={category.title} symbols={category.symbols} />
                ))
            ) : (
                <p>Cargando categorías...</p>
            )}
        </div>
    );
};

export default CategoryList;
