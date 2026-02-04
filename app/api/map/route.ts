import { NextResponse } from "next/server";

// 🔥 Temporary DB (later ML will update this)
const zonesDB = [
  {
    id: 1,
    city: "Mumbai",
    area: "Andheri East",
    lat: 19.115,
    lng: 72.869,
    severity: "high",
    issues: 18,
  },
  {
    id: 2,
    city: "Mumbai",
    area: "Dadar",
    lat: 19.017,
    lng: 72.844,
    severity: "medium",
    issues: 9,
  },
  {
    id: 3,
    city: "Mumbai",
    area: "Borivali",
    lat: 19.23,
    lng: 72.856,
    severity: "low",
    issues: 3,
  },
  {
    id: 4,
    city: "Pune",
    area: "Shivajinagar",
    lat: 18.5308,
    lng: 73.8475,
    severity: "high",
    issues: 12,
  },
];

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const city = searchParams.get("city");

  let filtered = zonesDB;

  if (city) {
    filtered = zonesDB.filter((z) => z.city === city);
  }

  return NextResponse.json({
    success: true,
    total: filtered.length,
    data: filtered,
  });
}
