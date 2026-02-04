// import CityMap from "../Components/map/CityMap";
// import MapLegend from "../Components/map/MapLegend";

// export default function MapPage() {
//   return (
//     <main className="p-4 md:p-6 lg:p-8 max-w-7xl mx-auto">
//       <h1 className="text-xl md:text-2xl font-bold mb-4">
//         City Risk Heatmap
//       </h1>

//       <CityMap />
//       <MapLegend />
//     </main>
//   );
// }

import CityMap from "../Components/map/CityMap";
import MapLegend from "../Components/map/MapLegend";
import CitySelector from "../Components/common/CitySelector";

export default function MapPage() {
  return (
    <main className="p-4 md:p-6 lg:p-8 max-w-7xl mx-auto">
      <h1 className="text-xl md:text-2xl font-bold mb-4">
        City Risk Heatmap
      </h1>
    <CitySelector />

      <CityMap />
      <MapLegend />
    </main>
  );
}

