export const getLocationData = async (lat, lon) => {
  try {
    const response = fetch(
      `https://api-bdc.net/data/reverse-geocode?latitude=${lat}&longitude=${lon}&localityLanguage=en&key=${process.env.BIG_DATA_API_KEY}`,
    );
    const data = response.json();
    return data;
  } catch (e) {
    console.log(e.message);
  }
};

export const getLocationLatLongList = async () => {
  try {
    const response = fetch(`http://localhoat:3000/api/location`);
    const data = response.json();
    return data;
  } catch (e) {
    console.log(e.message);
  }
};

export const getLocationLatLong = async (locationName) => {
  try {
    const response = fetch(
      `http://localhoat:3000/api/location/${locationName}`,
    );
    const data = response.json();
    return data;
  } catch (e) {
    console.log(e.message);
  }
};
