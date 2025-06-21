import React from "react";
import type { Route } from "./+types/daily-leaderboards-page";
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
  month: z.coerce.number(),
  day: z.coerce.number(),
});

export const meta = ({ params }: Route.MetaArgs) => {
  return [
    {
      title: `${params.month}/${params.day}/${params.year} Leaderboard | ProductHunt Clone`,
    },
    {
      name: "description",
      content: `Top products of ${params.month}/${params.day}/${params.year}`,
    },
  ];
};

export const loader = ({ params }: Route.LoaderArgs) => {
  const { success, data: parsedParams } = paramsSchema.safeParse(params);
  if (!success) {
    throw data(
      {
        error_code: "Invalid_date",
        message: "Invalid date: params must be numbers",
      },
      { status: 400 }
    );
  }

  const date = DateTime.fromObject({
    year: Number(parsedParams.year),
    month: Number(parsedParams.month),
    day: Number(parsedParams.day),
  }).setZone("America/Vancouver");

  if (!date.isValid) {
    throw data(
      { error_code: "Invalid_date", message: "Invalid date" },
      { status: 400 }
    );
  }

  const today = DateTime.now().setZone("America/Vancouver").startOf("day");
  if (date > today) {
    throw data(
      { error_code: "Future_date", message: "Future date" },
      { status: 400 }
    );
  }

  return {
    ...parsedParams,
  };
};

export default function DailyLeaderboardPage({
  loaderData,
}: Route.ComponentProps) {
  const urlDate = DateTime.fromObject({ ...loaderData });
  const nextDate = urlDate.plus({ days: 1 });
  const prevDate = urlDate.minus({ days: 1 });
  const today = DateTime.now().startOf("day");
  const isNextDateValid = nextDate <= today;

  return (
    <div className="">
      <Hero
        className="px-10"
        title={`The best products of ${urlDate.toLocaleString(
          DateTime.DATE_MED
        )}`}
      />
      <div className="space-x-10 flex justify-center items-center w-full max-w-screen-md mx-auto py-5">
        <Link
          to={`/products/leaderboards/daily/${prevDate.toFormat("yyyy/MM/dd")}`}
        >
          <Button variant="outline" size="icon">
            <ChevronLeftIcon className="size-4" />
          </Button>
        </Link>
        <div className="text-sm text-muted-foreground">
          {urlDate.toLocaleString(DateTime.DATE_MED)}
        </div>
        {isNextDateValid ? (
          <Link
            to={`/products/leaderboards/daily/${nextDate.toFormat(
              "yyyy/MM/dd"
            )}`}
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
  return <div>Error in leaderboard daily</div>;
}
