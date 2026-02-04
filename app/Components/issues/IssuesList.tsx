"use client";

import { useEffect, useState } from "react";
import IssueCard from "./IssueCard";
import IssuesFilter from "./IssuesFilterBar";
import { useCity } from "../../context/CityContext";

export default function IssuesList() {
  const [issues, setIssues] = useState<any[]>([]);
  const [filters, setFilters] = useState({
    topic: "",
    severity: "",
  });

  const { city } = useCity();

  // 🔥 function that calls backend
  const fetchIssues = () => {
    const query = new URLSearchParams({
      ...filters,
      city,
    }).toString();

    fetch(`/api/issues?${query}`)
      .then((res) => res.json())
      .then((data) => setIssues(data.data));
  };

  // run when filters OR city changes
  useEffect(() => {
    fetchIssues();
  }, [filters, city]);

  return (
    <>
      <IssuesFilter onFilterChange={setFilters} />

      <div className="grid gap-4">
        {issues.map((issue) => (
          <IssueCard key={issue.id} issue={issue} />
        ))}
      </div>
    </>
  );
}
