const LOCAL = "http://localhost:5000/graphql";
const DEV = "https://dev-booking-lite.stayjanda.cloud/"; 
const PORD = `${process.env.REACT_APP_API_SERVER_URI}`;

export const SERVER_URI =
  process.env.NODE_ENV === "development"
    ? LOCAL
    : LOCAL;

export default (() => {
  return SERVER_URI;
})();
