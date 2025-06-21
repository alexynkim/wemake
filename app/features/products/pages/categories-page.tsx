import React from "react";
import { Hero } from "~/common/components/hero";
import { CategoryCard } from "../components/category-card";
import type { Route } from "./+types/categories-page";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Categories | Wemake" },
    { name: "description", content: "Browse our product categories" },
  ];
};

export default function CategoriesPage() {
  const categories = [
    {
      name: "Technology",
      description: "Technology to make your life easier",
    },
    {
      name: "Design",
      description: "Design to make your life easier",
    },
    {
      name: "Productivity",
      description: "Productivity to make your life easier",
    },
    {
      name: "Education",
      description: "Education to make your life easier",
    },
    {
      name: "Entertainment",
      description: "Entertainment to make your life easier",
    },
  ];

  return (
    <div className="space-y-10">
      <Hero
        title="Product Categories"
        description="Browse our product categories"
      />
      <div className="grid grid-cols-3 gap-4">
        {categories.map((category) => (
          <CategoryCard
            key={category.name}
            name={category.name}
            description={category.description}
          />
        ))}
      </div>
    </div>
  );
}
