// // "use client";

// // import { MapContainer as LeafletMap, TileLayer } from "react-leaflet";
// // import "leaflet/dist/leaflet.css";
// // import RiskZoneLayer from "./RiskZoneLayer";

// // export default function MapContainer() {
// //   return (
// //     <div className="h-[70vh] rounded overflow-hidden border">
// //       <LeafletMap
// //         center={[19.076, 72.8777]} // Mumbai default
// //         zoom={11}
// //         className="h-full w-full"
// //       >
// //         <TileLayer
// //           attribution="&copy; OpenStreetMap"
// //           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
// //         />

// //         <RiskZoneLayer />
// //       </LeafletMap>
// //     </div>
// //   );
// // }



// // 2)

// "use client";

// import { MapContainer, TileLayer } from "react-leaflet";
// import type { LatLngExpression } from "leaflet";
// import "leaflet/dist/leaflet.css";

// import RiskZoneLayer from "./RiskZoneLayer";

// const center: LatLngExpression = [19.076, 72.8777]; // Mumbai

// export default function CityMap() {
//   return (
//     <div className="h-[70vh] rounded overflow-hidden border">
//       <MapContainer
//         center={center}
//         zoom={11}
//         scrollWheelZoom={true}
//         className="h-full w-full"
//       >
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />

//         <RiskZoneLayer />
//       </MapContainer>
//     </div>
//   );
// }

"use client";
"use client";

import dynamic from "next/dynamic";

const CityMap = dynamic(() => import("./CityMapClient"), {
  ssr: false,
});

export default CityMap;
