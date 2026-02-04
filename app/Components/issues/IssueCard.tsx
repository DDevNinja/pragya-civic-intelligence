"use client";

import { useRouter } from "next/navigation";

type Props = {
  issue: any;
};

export default function IssueCard({ issue }: Props) {
  const router = useRouter();

  const color =
    issue.severity === "high"
      ? "bg-red-100 text-red-700"
      : issue.severity === "medium"
      ? "bg-yellow-100 text-yellow-700"
      : "bg-green-100 text-green-700";

  return (
    <div
      onClick={() =>
        router.push(`/map?area=${encodeURIComponent(issue.area)}`)
      }
      className="border rounded-lg p-4 flex flex-col gap-2 cursor-pointer hover:shadow-md transition"
    >
      <div className="flex justify-between items-center">
        <h3 className="font-semibold">{issue.title}</h3>
        <span className={`text-xs px-2 py-1 rounded ${color}`}>
          {issue.severity.toUpperCase()}
        </span>
      </div>

      <p className="text-sm text-gray-600">
        {issue.area}, {issue.city}
      </p>

      <p className="text-xs text-gray-500">
        Topic: {issue.topic} • Issues: {issue.count}
      </p>
    </div>
  );
}
