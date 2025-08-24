import axios from "axios";

export const getWeatherdata = async (req, res) => {
  try {
    const { cityId } = req.query;

    const API_KEY = process.env.OPENWEATHER_API_KEY;

    const result = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather",
      {
        params: {
          id: cityId,
          units: "metric",
          appid: API_KEY,
        },
      }
    );
    return res.status(200).json({ ...result.data });
  } catch (error) {
    console.error("An error occurred while fetching the weather data:", error);
    return res
      .status(500)
      .json({ message: "An error occurred while fetching the weather data" });
  }
};
