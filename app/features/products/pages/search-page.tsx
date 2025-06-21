import React, { useState } from "react";
import type { Route } from "./+types/search-page";
import z from "zod";
import { data, Form } from "react-router";
import { Hero } from "~/common/components/hero";
import { ProductCard } from "../components/product-card";
import ProductPagination from "~/common/components/product-pagination";
import { Input } from "~/common/components/ui/input";
import { Button } from "~/common/components/ui/button";

const paramsSchema = z.object({
  query: z.string().optional().default(""),
  page: z.coerce.number().optional().default(1),
});

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Search | Product WeMake" },
    {
      name: "description",
      content: "Search for products on Product WeMake",
    },
  ];
};

export const loader = ({ request }: Route.LoaderArgs) => {
  const url = new URL(request.url);
  const { success, data: parsedParams } = paramsSchema.safeParse(
    Object.fromEntries(url.searchParams)
  );

  if (!success) {
    throw data({ error_code: "Invalid_params", message: "Invalid params" });
  }

  return { ...parsedParams };
};

export default function SearchPage({ loaderData }: Route.ComponentProps) {
  return (
    <div className="space-y-10">
      <Hero
        title="Search"
        description="Search for products by title or description"
      />
      <Form className="flex justify-center items-center max-w-screen-sm mx-auto gap-2">
        <Input
          type="text"
          name="query"
          placeholder="Search for products"
          className="text-lg"
        />
        <Button type="submit">Search</Button>
      </Form>
      <div className="space-y-5 w-full max-w-screen-md mx-auto">
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
      </div>
      <ProductPagination totalPage={10} />
    </div>
  );
}
