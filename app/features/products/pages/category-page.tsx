import React from "react";
import { useParams } from "react-router";
import { Hero } from "~/common/components/hero";
import { ProductCard } from "../components/product-card";
import ProductPagination from "~/common/components/product-pagination";
import type { Route } from "./+types/category-page";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Category | Wemake" },
    { name: "description", content: "Browse our product category" },
  ];
};

export default function CategoryPage() {
  const { category } = useParams();

  return (
    <div className="space-y-10">
      <Hero
        title={`${category}`.charAt(0).toUpperCase() + `${category}`.slice(1)}
        description={`Browse ${category} products`}
      />
      <div className="space-y-5 w-full max-w-screen-md mx-auto">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index}>
            <ProductCard
              id={`${index}`}
              name={`Product ${category}`}
              description="Product description"
              commentCount={12}
              viewCount={12}
              upvoteCount={120}
            />
          </div>
        ))}
      </div>
      <ProductPagination totalPage={10} />
    </div>
  );
}
