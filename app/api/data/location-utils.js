const locations = [
  {
    name: "dhaka",
    latitude: 23.8103,
    longitude: 90.4125,
  },
  {
    name: "kolkata",
    latitude: 22.5726,
    longitude: 88.3639,
  },
  {
    name: "london",
    latitude: 51.5072,
    longitude: -0.1276,
  },
  {
    name: "america",
    latitude: 40.7128,
    longitude: -74.006,
  },
  {
    name: "japan",
    latitude: 35.6762,
    longitude: 139.6503,
  },
  {
    name: "nepal",
    latitude: 27.7172,
    longitude: 85.324,
  },
];

export const getLoaction = () => {
  return locations;
};

export const findLocation = (countryName) => {
  if (!countryName) return null;
  return (
    locations.find(
      (location) =>
        location.name.toLocaleLowerCase() === countryName.toLocaleLowerCase(),
    ) || {}
  );
};
