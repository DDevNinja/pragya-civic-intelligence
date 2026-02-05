"use client";

import { useEffect, useState } from "react";
import { useCity } from "../../context/CityContext";

type Issue = {
  id: number;
  title: string;
  area: string;
  city: string;
  severity: string;
};

export default function RecentIssues() {
  const { city } = useCity();
  const [issues, setIssues] = useState<Issue[]>([]);

  useEffect(() => {
    fetch(`/api/issues?city=${city}`)
      .then((res) => res.json())
      .then((data) => {
        // take only first 5 latest issues
        setIssues(data.data.slice(0, 5));
      });
  }, [city]);

  return (
    <div className="border rounded-xl p-4 bg-white shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Recent Issues</h2>

      <div className="space-y-3">
        {issues.map((issue) => (
          <div
            key={issue.id}
            className="flex justify-between items-center border-b pb-2"
          >
            <div>
              <p className="font-medium text-sm">{issue.title}</p>
              <p className="text-xs text-gray-500">
                {issue.area}, {issue.city}
              </p>
            </div>

            <SeverityBadge severity={issue.severity} />
          </div>
        ))}
      </div>
    </div>
  );
}

function SeverityBadge({ severity }: { severity: string }) {
  const colors: any = {
    high: "bg-red-100 text-red-700",
    medium: "bg-yellow-100 text-yellow-700",
    low: "bg-green-100 text-green-700",
  };

  return (
    <span className={`text-xs px-2 py-1 rounded ${colors[severity]}`}>
      {severity.toUpperCase()}
    </span>
  );
}
