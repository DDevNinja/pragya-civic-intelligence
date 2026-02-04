const data = [
  { label: "High Risk", count: 12, color: "bg-red-500" },
  { label: "Medium Risk", count: 21, color: "bg-yellow-500" },
  { label: "Low Risk", count: 34, color: "bg-green-500" },
];

export default function RiskSummary() {
  return (
    <div className="grid grid-cols-3 md:grid-cols-1 gap-3">
      {data.map((item) => (
        <div
          key={item.label}
          className={`${item.color} text-white p-4 rounded text-center`}
        >
          <p className="text-sm">{item.label}</p>
          <p className="text-2xl font-bold">{item.count}</p>
        </div>
      ))}
    </div>
  );
}
