import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client/core";

import { locationVar } from "./router";

const uri = "http://localhost:1337/graphql";

export const link = new HttpLink({ uri });

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        location(): Location {
          return locationVar();
        },
      },
    },
  },
});

export const client = new ApolloClient({ cache, link });
