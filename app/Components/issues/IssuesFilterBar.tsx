"use client";

type Props = {
  onFilterChange: (filters: any) => void;
};

export default function IssuesFilter({ onFilterChange }: Props) {
  const handleChange = (e: any) => {
    const { name, value } = e.target;

    onFilterChange((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="flex flex-wrap gap-3 mb-4">
      <select name="city" onChange={handleChange} className="border rounded px-3 py-2 text-sm">
        <option value="">City</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Pune">Pune</option>
      </select>

      <select name="topic" onChange={handleChange} className="border rounded px-3 py-2 text-sm">
        <option value="">Topic</option>
        <option value="Roads">Roads</option>
        <option value="Health">Health</option>
        <option value="Sanitation">Sanitation</option>
        <option value="Weather">Weather</option>
      </select>

      <select name="severity" onChange={handleChange} className="border rounded px-3 py-2 text-sm">
        <option value="">Severity</option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
    </div>
  );
}
