import { mocks } from "./mock";
import camelize from "camelize";

export const restaurantsRequest = async (location = "43.653225,-79.383186") => {
  const mock = mocks[location];

  if (!mock) {
    throw new Error("Not Found");
  }

  return mock;
};

const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });

  return camelize(mappedResults);
};
