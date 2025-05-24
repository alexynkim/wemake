import React from "react";
import { Link } from "react-router";

export default function CategoriesPage() {
  const categories = [
    "Technology",
    "Design",
    "Productivity",
    "Education",
    "Entertainment",
    "Health",
    "Finance",
    "Social",
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Product Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link
            key={category}
            to={`/products/categories/${category.toLowerCase()}`}
            className="p-4 border rounded-lg hover:bg-gray-50"
          >
            <h2 className="text-xl font-semibold">{category}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
