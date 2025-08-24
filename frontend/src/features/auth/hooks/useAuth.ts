import { useAuth0 } from "@auth0/auth0-react";

const useAuth = () => {
  const { loginWithRedirect, logout, getAccessTokenSilently, isAuthenticated } =
    useAuth0();

  const auth0Login = () => {
    loginWithRedirect({
      appState: { returnTo: "/weather" },
      authorizationParams: {
        audience: "https://weather-api.myapp.com",
        scope: "read:weather",
      },
    });
  };

  const auth0Logout = () => {
    logout({ logoutParams: { returnTo: window.location.origin } });
  };

  const getToken = async () => {
    if (!isAuthenticated) return null;

    return await getAccessTokenSilently({
      authorizationParams: {
        audience: "https://weather-api.myapp.com",
        scope: "read:weather",
      },
    });
  };

  return {
    auth0Login,
    auth0Logout,
    getToken,
  };
};

export default useAuth;
