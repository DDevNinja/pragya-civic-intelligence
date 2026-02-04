export function getCoordinates(area: string) {
  const coords: Record<string, { lat: number; lng: number }> = {
    // Mumbai
    "Andheri East": { lat: 19.115, lng: 72.869 },
    Dadar: { lat: 19.017, lng: 72.844 },
    Borivali: { lat: 19.23, lng: 72.856 },

    // Pune 🔥 NEW
    Shivajinagar: { lat: 18.5308, lng: 73.8475 },
  };

  return coords[area] || { lat: 19.076, lng: 72.8777 }; // fallback
}
