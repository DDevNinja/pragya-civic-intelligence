import { NextResponse } from "next/server";

// Temporary database (later ML will send this)
const issuesDB = [
  {
    id: 1,
    title: "Severe potholes near metro station",
    city: "Mumbai",
    area: "Andheri East",
    topic: "Roads",
    severity: "high",
    count: 18,
  },
  {
    id: 2,
    title: "Garbage overflow in residential area",
    city: "Mumbai",
    area: "Dadar",
    topic: "Sanitation",
    severity: "medium",
    count: 9,
  },
  {
    id: 3,
    title: "Dengue cases increasing",
    city: "Mumbai",
    area: "Borivali",
    topic: "Health",
    severity: "low",
    count: 3,
  },
  {
    id: 4,
    title: "Water logging after rain",
    city: "Pune",
    area: "Shivajinagar",
    topic: "Weather",
    severity: "high",
    count: 12,
  },
];

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const city = searchParams.get("city");
  const topic = searchParams.get("topic");
  const severity = searchParams.get("severity");

  let filtered = issuesDB;

  if (city) {
    filtered = filtered.filter((i) => i.city === city);
  }

  if (topic) {
    filtered = filtered.filter((i) => i.topic === topic);
  }

  if (severity) {
    filtered = filtered.filter((i) => i.severity === severity);
  }

  return NextResponse.json({
    success: true,
    total: filtered.length,
    data: filtered,
  });
}
