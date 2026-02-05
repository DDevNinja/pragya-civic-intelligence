import { NextResponse } from "next/server";

// 🔥 Later ML / Govt API will send this
const alertsDB = [
  {
    id: 1,
    city: "Mumbai",
    message: "High risk road damage detected in Andheri East",
    type: "danger",
  },
  {
    id: 2,
    city: "Pune",
    message: "Heavy rainfall warning issued",
    type: "warning",
  },
  {
    id: 3,
    city: "Mumbai",
    message: "Dengue cases increasing in Borivali",
    type: "danger",
  },
];

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const city = searchParams.get("city");

  let filtered = alertsDB;

  if (city) {
    filtered = alertsDB.filter((a) => a.city === city);
  }

  return NextResponse.json({
    success: true,
    data: filtered,
  });
}
