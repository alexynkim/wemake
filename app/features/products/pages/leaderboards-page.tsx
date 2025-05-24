import React from "react";
import { Link } from "react-router";

export default function LeaderboardsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Product Leaderboards</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link
          to="/products/leaderboards/yearly"
          className="p-4 border rounded-lg hover:bg-gray-50"
        >
          <h2 className="text-xl font-semibold mb-2">Yearly Leaderboards</h2>
          <p>View top products by year</p>
        </Link>
        <Link
          to="/products/leaderboards/monthly"
          className="p-4 border rounded-lg hover:bg-gray-50"
        >
          <h2 className="text-xl font-semibold mb-2">Monthly Leaderboards</h2>
          <p>View top products by month</p>
        </Link>
        <Link
          to="/products/leaderboards/weekly"
          className="p-4 border rounded-lg hover:bg-gray-50"
        >
          <h2 className="text-xl font-semibold mb-2">Weekly Leaderboards</h2>
          <p>View top products by week</p>
        </Link>
        <Link
          to="/products/leaderboards/daily"
          className="p-4 border rounded-lg hover:bg-gray-50"
        >
          <h2 className="text-xl font-semibold mb-2">Daily Leaderboards</h2>
          <p>View top products by day</p>
        </Link>
      </div>
    </div>
  );
}
