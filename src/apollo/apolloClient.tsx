import { ApolloClient, from } from "@apollo/client";
import dotenv from "dotenv";
import uri from "./uri";
import cache from "./cache";
// @ts-ignore
import { createUploadLink } from "apollo-upload-client";
import { toast } from "@janda-com/front";
import { onError } from "@apollo/client/link/error";

const headers = {
};

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) => {
      console.warn(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      );
    });
    toast.warn("알수 없는 문제가 발생했습니다. 문의 부탁드립니다.");
  } else if (networkError) {
    toast.warn("서버가 응답하지 않습니다.");
  }
});

const fileUploadLink = createUploadLink({
  uri,
  headers,
  credentials: "include",
});

dotenv.config({
  path: "../.env",
});

const client = new ApolloClient({
  link: from([fileUploadLink, errorLink]),
  uri,
  cache,
  headers,
  credentials: "include",
});

export default client;