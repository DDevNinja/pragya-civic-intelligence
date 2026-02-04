"use client";

export default function DashboardHeader() {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <h1 className="text-xl md:text-2xl font-bold">
        PRAGYA Civic Intelligence Dashboard
      </h1>

      <div className="flex flex-col md:flex-row gap-2 md:w-[420px]">
        <select className="border p-2 rounded w-full">
          <option>Mumbai</option>
          <option>Pune</option>
          <option>Nagpur</option>
        </select>

        <select className="border p-2 rounded w-full">
          <option>Roads</option>
          <option>Health</option>
          <option>Sanitation</option>
          <option>Weather</option>
        </select>
      </div>
    </div>
  );
}
