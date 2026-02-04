export default function IssuesFilter() {
  return (
    <div className="flex flex-wrap gap-3 mb-4">
      <select className="border rounded px-3 py-2 text-sm">
        <option>City</option>
        <option>Mumbai</option>
        <option>Pune</option>
      </select>

      <select className="border rounded px-3 py-2 text-sm">
        <option>Topic</option>
        <option>Roads</option>
        <option>Health</option>
        <option>Sanitation</option>
      </select>

      <select className="border rounded px-3 py-2 text-sm">
        <option>Severity</option>
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>
    </div>
  );
}
