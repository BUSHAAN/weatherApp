import useAuth from "../hooks/useAuth";

const LogoutButton = () => {
  const { auth0Logout } = useAuth();

  return (
    <button
      className="bg-primary-100 text-white px-5 py-2 rounded-lg cursor-pointer"
      onClick={auth0Logout}
    >
      Log Out
    </button>
  );
};

export default LogoutButton;
