import React, { useState, useEffect } from "react";
import Category from "./Category";

interface CategoryType {
    title: string;
    symbols: string[];
}

const CategoryList: React.FC = () => {
    const [categories, setCategories] = useState<CategoryType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error] = useState<string | null>(null);

    useEffect(() => {
        fetch("/data/categories.json")
            .then((response) => response.json())
            .then((data) => {
                setCategories(data);
                setLoading(false);
            })
            .catch((error) => console.error("Error loading categories:", error));
    }, []);


    if (loading) {
        return <div className="loading">Loading categories...</div>;
    }

    if (error) {
        return <div className="error">Error: {error}</div>;
    }

    return (
        <div className="category-list">
            {categories.map((category, index) => (
                <Category key={index} title={category.title} symbols={category.symbols} />
            ))}
        </div>
    );
};

export default CategoryList;