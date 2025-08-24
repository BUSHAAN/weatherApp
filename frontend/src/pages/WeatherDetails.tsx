import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";
import WeatherCard from "../features/weather_details/components/WeatherCard";
import BackgroundImage from "../assets/background.png";
import LogoComponent from "../features/shared/LogoComponent";
import LogoutButton from "../features/auth/components/LogoutButton";
import { fetchWeatherData } from "../features/weather_details/services/fetchWeatherData";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../features/auth/hooks/useAuth";

const LoadingComponent = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
    {Array.from({ length: 4 }).map((_, index) => (
      <div
        key={index}
        className="w-[70vw] lg:w-[35vw] bg-gray-600  rounded-2xl text-white h-[45vh] animate-pulse"
      />
    ))}
  </div>
);

const ErrorComponent = ({ message }: { message: string }) => (
  <div className="flex bg-white justify-center items-center w-[70vw] lg:w-[35vw] rounded-2xl text-red-500 text-2xl h-[45vh]">
    Error: {message}
  </div>
);

const WeatherDetails = () => {
  const { isAuthenticated } = useAuth0();
  const { getToken } = useAuth();
  
  const { data, error, isLoading } = useQuery({
    queryKey: ["weatherData"],
    queryFn: async () => {
      const token = await getToken();
      if (!token) {
        throw new Error("Authentication token is missing.");
      }
      return fetchWeatherData(token);
    },
    staleTime: 5 * 60 * 1000,
  });

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div
      className={`w-full border min-h-screen flex flex-col justify-start items-center bg-[#1F2128] pb-20 relative`}
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        objectFit: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <LogoComponent />

      {isLoading ? (
        <LoadingComponent />
      ) : error ? (
        <ErrorComponent message={error.message} />
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
          {data?.map((city, index) => (
            <WeatherCard key={city.id} city={city} index={index} />
          ))}
        </div>
      )}
      <div className="absolute top-3 right-3">
        <LogoutButton />
      </div>
    </div>
  );
};

export default WeatherDetails;
