export const getZoneColor = (severity: string) => {
  switch (severity) {
    case "high":
      return "red";
    case "medium":
      return "orange";
    default:
      return "green";
  }
};
