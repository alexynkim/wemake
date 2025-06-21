import React from "react";
import type { Route } from "./+types/weekly-leaderboards-page";
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
  week: z.coerce.number(),
});

export const meta = ({ params }: Route.MetaArgs) => {
  return [
    {
      title: `${params.year}/${params.week} Leaderboard | ProductHunt Clone`,
    },
    {
      name: "description",
      content: `Top products of ${params.year}/${params.week}`,
    },
  ];
};

export const loader = ({ params }: Route.LoaderArgs) => {
  const { success, data: parsedParams } = paramsSchema.safeParse(params);
  if (!success) {
    throw data(
      {
        error_code: "Invalid_week",
        message: "Invalid week: params must be numbers",
      },
      { status: 400 }
    );
  }

  const date = DateTime.fromObject({
    weekYear: Number(parsedParams.year),
    weekNumber: Number(parsedParams.week),
  }).setZone("America/Vancouver");

  if (!date.isValid) {
    throw data(
      { error_code: "Invalid_week", message: "Invalid week" },
      { status: 400 }
    );
  }

  const thisWeek = DateTime.now().setZone("America/Vancouver").startOf("week");
  if (date > thisWeek) {
    throw data(
      { error_code: "Future_week", message: "Future week" },
      { status: 400 }
    );
  }

  return {
    ...parsedParams,
  };
};

export default function WeeklyLeaderboardPage({
  loaderData,
}: Route.ComponentProps) {
  const urlDate = DateTime.fromObject(
    {
      weekYear: Number(loaderData.year),
      weekNumber: Number(loaderData.week),
    },
    { zone: "America/Vancouver" }
  );
  const nextWeek = urlDate.plus({ days: 10 });
  const prevWeek = urlDate.minus({ days: 4 });
  const thisWeek = DateTime.now().endOf("week");
  const isNextWeekValid = nextWeek <= thisWeek;

  return (
    <div className="">
      <Hero
        className="px-10"
        title={`The Best of Week`}
        description={`${urlDate
          .startOf("week")
          .toLocaleString(DateTime.DATE_SHORT)} - ${urlDate
          .endOf("week")
          .toLocaleString(DateTime.DATE_SHORT)}`}
      />
      <div className="space-x-10 flex justify-center items-center w-full max-w-screen-md mx-auto py-5">
        <Link
          to={`/products/leaderboards/weekly/${prevWeek.toFormat("yyyy/WW")}`}
        >
          <Button variant="outline" size="icon">
            <ChevronLeftIcon className="size-4" />
          </Button>
        </Link>
        <div className="text-sm text-muted-foreground">
          {urlDate.weekNumber} week of {urlDate.weekYear}
        </div>
        {isNextWeekValid ? (
          <Link
            to={`/products/leaderboards/weekly/${nextWeek.toFormat("yyyy/WW")}`}
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
