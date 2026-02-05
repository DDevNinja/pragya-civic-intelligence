"use client";

import { useEffect, useState } from "react";
import { useCity } from "../../context/CityContext";

type Stats = {
  total: number;
  high: number;
  medium: number;
  low: number;
};

export default function DashboardStats() {
  const { city } = useCity();
  const [stats, setStats] = useState<Stats>({
    total: 0,
    high: 0,
    medium: 0,
    low: 0,
  });

  useEffect(() => {
    fetch(`/api/map?city=${city}`)
      .then((res) => res.json())
      .then((data) => {
        const zones = data.data;

        const newStats: Stats = {
          total: zones.length,
          high: zones.filter((z: any) => z.severity === "high").length,
          medium: zones.filter((z: any) => z.severity === "medium").length,
          low: zones.filter((z: any) => z.severity === "low").length,
        };

        setStats(newStats);
      });
  }, [city]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <StatCard title="Total Zones" value={stats.total} />
      <StatCard title="High Risk" value={stats.high} color="red" />
      <StatCard title="Medium Risk" value={stats.medium} color="yellow" />
      <StatCard title="Low Risk" value={stats.low} color="green" />
    </div>
  );
}

function StatCard({ title, value, color }: any) {
  const colorMap: any = {
    red: "bg-red-100 text-red-700",
    yellow: "bg-yellow-100 text-yellow-700",
    green: "bg-green-100 text-green-700",
  };

  return (
    <div className="border rounded-lg p-4 shadow-sm">
      <p className="text-sm text-gray-500">{title}</p>
      <p className={`text-2xl font-bold ${colorMap[color] || ""}`}>
        {value}
      </p>
    </div>
  );
}
