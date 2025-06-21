import React from "react";
import { Link } from "react-router";
import type { Route } from "./+types/leaderboards-page";
import { Hero } from "~/common/components/hero";
import { ProductCard } from "../components/product-card";
import { Button } from "~/common/components/ui/button";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Leaderboards:WeMake" },
    { name: "description", content: "Welcome to WeMake" },
  ];
};

export default function LeaderboardsPage() {
  return (
    <div className="space-y-20">
      <Hero
        title="Leaderboards"
        description="The most popular products on wemake"
      />

      <div className="grid grid-cols-3 gap-4 px-5">
        <div>
          <h2 className="text-3xl font-bold mb-2 leading-tight tracking-tight">
            Daily Leaderboard
          </h2>
          <p className="text-xl font-light text-foreground/80">
            The most popular products on wemake by day
          </p>
        </div>
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index}>
            <ProductCard
              id={`${index}`}
              name={`Product ${index}`}
              description="Product description"
              commentCount={12}
              viewCount={12}
              upvoteCount={120}
            />
          </div>
        ))}
        <Button variant="link" className="text-lg p-0 self-center" asChild>
          <Link to="/products/leaderboards/daily">
            Explore daily products &rarr;
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-3 gap-4 px-5">
        <div>
          <h2 className="text-3xl font-bold mb-2 leading-tight tracking-tight">
            Weekly Leaderboard
          </h2>
          <p className="text-xl font-light text-foreground/80">
            The most popular products on wemake by week
          </p>
        </div>
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index}>
            <ProductCard
              id={`${index}`}
              name={`Product ${index}`}
              description="Product description"
              commentCount={12}
              viewCount={12}
              upvoteCount={120}
            />
          </div>
        ))}
        <Button variant="link" className="text-lg p-0 self-center" asChild>
          <Link to="/products/leaderboards/weekly">
            Explore weekly products &rarr;
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-3 gap-4 px-5">
        <div>
          <h2 className="text-3xl font-bold mb-2 leading-tight tracking-tight">
            Monthly Leaderboard
          </h2>
          <p className="text-xl font-light text-foreground/80">
            The most popular products on wemake by month
          </p>
        </div>
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index}>
            <ProductCard
              id={`${index}`}
              name={`Product ${index}`}
              description="Product description"
              commentCount={12}
              viewCount={12}
              upvoteCount={120}
            />
          </div>
        ))}
        <Button variant="link" className="text-lg p-0 self-center" asChild>
          <Link to="/products/leaderboards/monthly">
            Explore monthly products &rarr;
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-3 gap-4 px-5">
        <div>
          <h2 className="text-3xl font-bold mb-2 leading-tight tracking-tight">
            Yearly Leaderboard
          </h2>
          <p className="text-xl font-light text-foreground/80">
            The most popular products on wemake by year
          </p>
        </div>
        {Array.from({ length: 7 }).map((_, index) => (
          <div key={index}>
            <ProductCard
              id={`${index}`}
              name={`Product ${index}`}
              description="Product description"
              commentCount={12}
              viewCount={12}
              upvoteCount={120}
            />
          </div>
        ))}
        <Button variant="link" className="text-lg p-0 self-center" asChild>
          <Link to="/products/leaderboards/yearly">
            Explore yearly products &rarr;
          </Link>
        </Button>
      </div>
    </div>
  );
}
