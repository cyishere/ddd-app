import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";

import GlobalStyles from "@/styles/GlobalStyles";
import { useApollo } from "@/lib/apolloClient";
import UserContext from "@/hooks/user-context";
import { useFetchUser } from "@/hooks/use-fetch-user";

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  const { user, isLoading: userIsLoading } = useFetchUser();

  return (
    <ApolloProvider client={apolloClient}>
      <GlobalStyles />
      <UserContext.Provider value={{ user, userIsLoading }}>
        <Component {...pageProps} />
      </UserContext.Provider>
    </ApolloProvider>
  );
}

export default MyApp;
