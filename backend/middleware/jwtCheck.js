import { auth } from "express-oauth2-jwt-bearer";

const jwtCheck = auth({
  audience: "https://weather-api.myapp.com",
  issuerBaseURL: "https://dev-cfgjoe02qvgtwlhs.us.auth0.com/",
  tokenSigningAlg: "RS256",
});

export default jwtCheck;
