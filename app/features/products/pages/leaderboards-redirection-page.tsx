import { data, redirect } from "react-router";
import { DateTime } from "luxon";
import type { Route } from "./+types/leaderboards-redirection-page";

export const loader = ({ params }: Route.LoaderArgs) => {
  const { period } = params;

  let url: string;
  const today = DateTime.now().setZone("America/Vancouver");

  if (period === "daily") {
    url = `/products/leaderboards/daily/${today.year}/${today.month}/${today.day}`;
  } else if (period === "weekly") {
    url = `/products/leaderboards/weekly/${today.year}/${today.weekNumber}`;
  } else if (period === "monthly") {
    url = `/products/leaderboards/monthly/${today.year}/${today.month}`;
  } else if (period === "yearly") {
    url = `/products/leaderboards/yearly/${today.year}`;
  } else {
    return data(null, { status: 400 });
  }
  return redirect(url);
};
