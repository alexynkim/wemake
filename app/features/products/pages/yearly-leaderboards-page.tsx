import React from "react";
import type { Route } from "./+types/yearly-leaderboards-page";
import { DateTime } from "luxon";
import { data, isRouteErrorResponse, Link } from "react-router";
import { z } from "zod";
import { Hero } from "~/common/components/hero";
import { ProductCard } from "../components/product-card";
import { Button } from "~/common/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import ProductPagination from "~/common/components/product-pagination";

const paramsSchema = z.object({
  year: z.coerce.number(),
});

export const meta = ({ params }: Route.MetaArgs) => {
  return [
    {
      title: `${params.year} Leaderboard | ProductHunt Clone`,
    },
    {
      name: "description",
      content: `Top products of ${params.year}`,
    },
  ];
};

export const loader = ({ params }: Route.LoaderArgs) => {
  const { success, data: parsedParams } = paramsSchema.safeParse(params);
  if (!success) {
    throw data(
      {
        error_code: "Invalid_year",
        message: "Invalid year: params must be numbers",
      },
      { status: 400 }
    );
  }

  const date = DateTime.fromObject({
    year: Number(parsedParams.year),
  }).setZone("America/Vancouver");

  if (!date.isValid) {
    throw data(
      { error_code: "Invalid_year", message: "Invalid year" },
      { status: 400 }
    );
  }

  const thisYear = DateTime.now().setZone("America/Vancouver").startOf("year");
  if (date > thisYear) {
    throw data(
      { error_code: "Future_year", message: "Future year" },
      { status: 400 }
    );
  }

  return {
    ...parsedParams,
  };
};

export default function YearlyLeaderboardPage({
  loaderData,
}: Route.ComponentProps) {
  const urlDate = DateTime.fromObject(
    {
      year: Number(loaderData.year),
    },
    { zone: "America/Vancouver" }
  );
  const prevYear = urlDate.minus({ year: 1 });
  const nextYear = urlDate.plus({ year: 1 });
  const thisYear = DateTime.now().startOf("year");
  const isNextYearValid = nextYear <= thisYear;

  return (
    <div className="">
      <Hero className="px-10" title={`The Best of Year ${urlDate.year}`} />
      <div className="space-x-10 flex justify-center items-center w-full max-w-screen-md mx-auto py-5">
        <Link to={`/products/leaderboards/yearly/${prevYear.toFormat("yyyy")}`}>
          <Button variant="outline" size="icon">
            <ChevronLeftIcon className="size-4" />
          </Button>
        </Link>
        <div className="text-sm text-muted-foreground">{urlDate.year}</div>
        {isNextYearValid ? (
          <Link
            to={`/products/leaderboards/yearly/${nextYear.toFormat("yyyy")}`}
          >
            <Button variant="outline" size="icon">
              <ChevronRightIcon className="size-4" />
            </Button>
          </Link>
        ) : (
          <Button variant="outline" size="icon" disabled>
            <ChevronRightIcon className="size-4" />
          </Button>
        )}
      </div>
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

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  if (isRouteErrorResponse(error)) {
    return (
      <div>
        {error.data.message} /{error.data.error_code}
      </div>
    );
  }
  if (error instanceof Error) {
    return <div>{error.message}</div>;
  }
  return <div>Error in leaderboard weekly</div>;
}
