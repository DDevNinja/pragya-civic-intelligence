import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const source = searchParams.get("source") || "twitter";
  const from = searchParams.get("from") || "2025-01-01";
  const to = searchParams.get("to") || "2025-01-02";

  // Abhi DB nahi, so dummy response (later DB se fill karenge)
  const items = [
    {
      id: "sim_001",
      source,
      text: "Road full of potholes near bus stand",
      timestamp: `${from}T10:00:00Z`,
      state: "MH",
      district: "Pune",
    },
  ];

  return NextResponse.json({ mode: "simulated", source, from, to, count: items.length, items });
}




// {
//   "mode": "simulated",
//   "source": "twitter",
//   "from": "2025-01-01",
//   "to": "2025-01-02",
//   "count": 1,
//   "items": [
//     {
//       "id": "sim_001",
//       "source": "twitter",
//       "text": "Road full of potholes near bus stand",
//       "timestamp": "2025-01-01T10:00:00Z",
//       "state": "MH",
//       "district": "Pune"
//     }
//   ]
// }