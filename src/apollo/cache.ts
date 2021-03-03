import { InMemoryCache } from "@apollo/client";
import possibleTypes from "./possibleTypes.json"

export const cache = new InMemoryCache({
  addTypename: true,
  typePolicies: {
  },
  possibleTypes,
});

export default cache;
