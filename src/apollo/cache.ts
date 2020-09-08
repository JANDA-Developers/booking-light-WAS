import { InMemoryCache } from "@apollo/client";

export const cache = new InMemoryCache({
  addTypename: true,
  typePolicies: {
  },
});

export default cache;
