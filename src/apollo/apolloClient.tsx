import { ApolloClient, from, split } from "@apollo/client";
import dotenv from "dotenv";
import uri from "./uri";
import cache from "./cache";
import { createUploadLink } from "apollo-upload-client";
import { toast } from "@janda-com/front";
import { onError } from "@apollo/client/link/error";
import { setContext } from "@apollo/client/link/context";
import { version } from "../../package.json";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";

// const wsLink = new WebSocketLink({
//     uri: "ws://localhost:5000/subscriptions",
//     options: {
//         reconnect: true,
//         connectionParams: {
//             // authToken: user.authToken,
//         },
//     },
// });

const headers = {};

const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
        graphQLErrors.map(({ message, locations, path }) => {
            console.warn(
                `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
            );
        });
        const msg = graphQLErrors[0].message;
        const errorMsg =
            process.env.NODE_ENV === "development"
                ? msg
                : "알수 없는 문제가 발생했습니다. 문의 부탁드립니다.";
        toast.warn(errorMsg, { toastId: "UnkownErrorToast" });
    } else if (networkError) {
        toast.warn("서버가 응답하지 않습니다.", {
            toastId: "ServerIsNotRespond",
        });
    }
});

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const storeId = localStorage.getItem("storeId") || "";
    // return the headers to the context so httpLink can read them
    const serviceProvider = localStorage.getItem("serviceProvider");

    return {
        headers: {
            ...headers,
            serviceProvider,
            storeId,
        },
    };
});

const fileUploadLink = createUploadLink({
    uri,
    credentials: "include",
});

dotenv.config({
    path: "../.env",
});

// const splitLink = split(
//     ({ query }) => {
//         const definition = getMainDefinition(query);
//         return (
//             definition.kind === "OperationDefinition" &&
//             definition.operation === "subscription"
//         );
//     },
//     wsLink,
//     fileUploadLink
// );

const client = new ApolloClient({
    link: from([authLink, errorLink, fileUploadLink as any]),
    uri,
    version,
    cache,
    credentials: "include",
});

export default client;
