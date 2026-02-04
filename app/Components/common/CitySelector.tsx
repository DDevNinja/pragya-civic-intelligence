"use client";
import { useCity } from "../../context/CityContext";

export default function CitySelector() {
  const { city, setCity } = useCity();

  return (
    <select
      value={city}
      onChange={(e) => setCity(e.target.value)}
      className="border px-3 py-2 rounded text-sm"
    >
      <option value="Mumbai">Mumbai</option>
      <option value="Pune">Pune</option>
    </select>
  );
}
