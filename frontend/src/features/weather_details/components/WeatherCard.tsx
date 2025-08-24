import CloudBackground from "../../../assets/cloud_bg.png";
import { convertToDateTime } from "../../../utils/convertToDate";
import { convertToTime } from "../../../utils/convertToTime";
import WindIcon from "../../../assets/windIcon.png";
import type { City } from "../../../types/City";

interface WeatherCardProps {
  city: City;
  index: number;
}

const colors = ["#388ee7", "#6249cc", "#40b681", "#de944e", "#9c3a3a"];

const WeatherCard = ({ city, index }: WeatherCardProps) => {
  return (
    <div className="w-[70vw] lg:w-[35vw] text-white h-[45vh] bg-gray-700 m-1 flex flex-col rounded-lg">
      <div
        className={`h-[180px] flex flex-col flex-5 z-10 rounded-t-lg relative`}
        style={{ backgroundColor: colors[index % colors.length] }}
      >
        <img
          src={CloudBackground}
          className="absolute bottom-0 w-[70vw] lg:w-[35vw]"
        />
        <div className="z-20 flex h-full w-full justify-around items-center">
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold">
              {" "}
              {`${city.name}, ${city.sys.country}`}
            </h2>
            <p className="pb-4">{convertToDateTime(city.dt, city.timezone)}</p>
            <div className="flex items-center">
            <img className="w-[48px]" src={`https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`} alt="weather_icon"/>
            <p className="text-lg">{city.weather[0].description}</p>
            </div>
          </div>
          <div>
            <h1 className="text-6xl pb-4">{Math.round(city.main.temp)}°C</h1>
            <p>{`Temp Min: ${Math.round(city.main.temp_min)}°C`}</p>
            <p>{`Temp Max: ${Math.round(city.main.temp_max)}°C`}</p>
          </div>
        </div>
      </div>

      <div className="flex-3 bg-gray-700 flex w-full justify-around items-center rounded-lg px-3 text-sm">
        <div className="flex flex-col items-start">
          <div className="font-semibold">
            Pressure:{" "}
            <span className="font-normal">{city.main.pressure}hPa</span>
          </div>
          <div className="font-semibold">
            Humidity: <span className="font-normal">{city.main.humidity}%</span>
          </div>
          <div className="font-semibold">
            Visibility:{" "}
            <span className="font-normal">{city.visibility / 1000}km</span>
          </div>
        </div>
        <div className="border-r border-[#77787a] h-16" />
        <div className="flex flex-col items-center gap-2">
          <img className="w-[26px]" src={WindIcon} alt={"wind_icon"} />
          <p>{`${city.wind.speed}m/s ${city.wind.deg} Degrees`}</p>
        </div>
        <div className="border-r border-[#77787a] h-16" />
        <div className="flex flex-col">
          <div>{`Sunrise: ${convertToTime(
            city.sys.sunrise,
            city.timezone
          )}`}</div>
          <div>{`Sunset: ${convertToTime(
            city.sys.sunset,
            city.timezone
          )}`}</div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
