"use client";

import { useEffect, useState } from "react";
import { useCity } from "../../context/CityContext";

type Alert = {
  id: number;
  message: string;
  type: string;
};

export default function AlertBanner() {
  const { city } = useCity();
  const [alerts, setAlerts] = useState<Alert[]>([]);

  useEffect(() => {
    fetch(`/api/alerts?city=${city}`)
      .then((res) => res.json())
      .then((data) => setAlerts(data.data));
  }, [city]);

  if (alerts.length === 0) return null;

  return (
    <div className="space-y-2">
      {alerts.map((alert) => (
        <div
          key={alert.id}
          className={`p-3 rounded text-sm font-medium ${
            alert.type === "danger"
              ? "bg-red-100 text-red-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          🚨 {alert.message}
        </div>
      ))}
    </div>
  );
}
