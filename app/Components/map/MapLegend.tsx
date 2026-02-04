export default function MapLegend() {
  return (
    <div className="flex gap-4 text-sm mt-3">
      <span className="flex items-center gap-2">
        <span className="w-3 h-3 bg-red-500 rounded-full"></span> High Risk
      </span>
      <span className="flex items-center gap-2">
        <span className="w-3 h-3 bg-yellow-400 rounded-full"></span> Medium Risk
      </span>
      <span className="flex items-center gap-2">
        <span className="w-3 h-3 bg-green-500 rounded-full"></span> Low Risk
      </span>
    </div>
  );
}
