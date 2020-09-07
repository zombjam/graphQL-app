import { NgModule } from '@angular/core';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { InMemoryCache } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';

import { createHttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';

const uri = 'https://48p1r2roz4.sse.codesandbox.io'; // <-- add the URL of the GraphQL server here

// GraphQL Error Handling
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(`%c[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`, `color: skyblue`)
    );
  }

  if (networkError) {
    console.log(`%c[Network error]: ${networkError}`, `color: skyblue`);
  }
});

const httpLink = createHttpLink({ uri });

export function createApollo() {
  return {
    link: ApolloLink.from([errorLink, httpLink]),
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        errorPolicy: 'all',
      },
    },
  };
}

@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
