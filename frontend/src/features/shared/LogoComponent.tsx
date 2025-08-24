import Logo from "../../assets/logo.png"

const LogoComponent = () => {
  return (
    <div className="flex items-center gap-3 mb-24 mt-18">
      <img className="w-[56px]" src={Logo} alt={"image"} />
      <p className="text-white text-3xl">Weather App</p>
    </div>
  );
};

export default LogoComponent;
