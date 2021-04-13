const LOCAL = "http://localhost:5000/graphql";
const PORD = "https://dev-booking-lite.stayjanda.cloud/graphql";

export const SERVER_URI =
  process.env.NODE_ENV === "development"
    ? LOCAL
    : PORD;

export default (() => {
  return SERVER_URI;
})();