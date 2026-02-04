const issues = [
  { title: "Major potholes on JM Road", level: "High", area: "Shivajinagar" },
  { title: "Water contamination", level: "Medium", area: "Andheri East" },
  { title: "Garbage overflow", level: "High", area: "Dadar" },
  { title: "Dengue cases rising", level: "Medium", area: "Borivali" },
  { title: "Road cracks reported", level: "Low", area: "Viman Nagar" },
];

export default function TopIssuesSlider() {
  return (
    <div>
      <h2 className="font-semibold mb-3 text-lg">Top 5 Issues</h2>

      <div className="
        flex gap-3 overflow-x-auto
        md:grid md:grid-cols-2 md:gap-4 md:overflow-visible
        lg:grid-cols-3
      ">
        {issues.map((issue, index) => (
          <div
            key={index}
            className="min-w-[240px] border rounded p-4 shadow-sm bg-white"
          >
            <p className="font-semibold">{issue.title}</p>
            <p className="text-sm text-gray-600">{issue.area}</p>

            <span
              className={`text-xs mt-2 inline-block px-2 py-1 rounded
              ${
                issue.level === "High"
                  ? "bg-red-100 text-red-700"
                  : issue.level === "Medium"
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-green-100 text-green-700"
              }`}
            >
              {issue.level}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
