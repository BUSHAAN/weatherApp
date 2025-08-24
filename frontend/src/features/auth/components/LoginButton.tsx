import useAuth from "../hooks/useAuth";

const LoginButton = () => {
  const { auth0Login } = useAuth();

  return (
    <button
      className="bg-primary-100 text-white px-5 py-2 rounded-lg cursor-pointer"
      onClick={auth0Login}
    >
      Log In
    </button>
  );
};

export default LoginButton;
