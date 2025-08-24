import { useAuth0 } from "@auth0/auth0-react";
import BackgroundImage from "../assets/background.png";
import LoginButton from "../features/auth/components/LoginButton";
import LogoutButton from "../features/auth/components/LogoutButton";
import LogoComponent from "../features/shared/LogoComponent";
import { Navigate } from "react-router-dom";

const HomePage = () => {
  const { isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return <Navigate to="/weather" />;
  }

  return (
    <div
      className={`w-full min-h-screen flex flex-col justify-start items-center bg-[#1F2128] pb-20 relative`}
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <LogoComponent />
      <div className="px-6 py-8 w-[80vw] h-[55vh] bg-primary-100 text-white rounded-sm flex flex-col justify-start items-start">
        <h1 className="text-3xl mb-3">Please Login</h1>
        <p>You have to login to view the weather details</p>
      </div>
      <div className="absolute top-3 right-3">
        {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      </div>
    </div>
  );
};

export default HomePage;
