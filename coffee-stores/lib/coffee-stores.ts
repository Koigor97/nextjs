import { MapboxType } from "../types/index";

function tranformCoffeeData(result: MapboxType) {
  return {
    id: result.id,
    address: result.properties?.address || "",
    name: result.text,
    imgUrl:
      "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };
}

export const fetchCoffeeStores = async () => {
  try {
    const limit = 6;
    const longLat = [28.159462230478198, -25.75456665743696];
    const res = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/coffee.json?limit=${limit}&proximity=${longLat}&access_token=sk.eyJ1Ijoia3Vsa2FybmlhbmtpdGEiLCJhIjoiY2xwa2JwNHowMDZmMzJ2b3BxcG53OW5pOCJ9.ZU9XbSFP6XXi4EWsW0H4sQ`
    );
    const data = await res.json();
    return data.features.map((result: MapboxType) =>
      tranformCoffeeData(result)
    );
  } catch (error) {
    console.error("Error while fetching coffee stores", error);
  }
};
