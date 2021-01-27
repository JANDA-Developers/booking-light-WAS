export const SERVER_URI =
  process.env.NODE_ENV === "development"
    ? "https://dev-booking-lite.stayjanda.cloud/"
    : `${process.env.REACT_APP_API_SERVER_URI}`;

export default (() => {
  return SERVER_URI;
})();
