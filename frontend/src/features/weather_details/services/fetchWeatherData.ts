import axios from "axios";
import cities from "../../../constants/cities.json";

export const fetchWeatherData = async (token: string) => {
  const cityIds = cities.List.map(({ CityCode }) => CityCode);
  const baseUrl = import.meta.env.VITE_BACKEND_URL;

  const requests = cityIds.map((cityId) =>
    axios.get(`${baseUrl}/weatherdata`, {
      params: {
        cityId,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  );

  const responses = await Promise.all(requests);
  return responses.map((response) => response.data);
};
