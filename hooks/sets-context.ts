import { createContext } from "react";
import { ApolloError } from "@apollo/client";

import { GetSetsQuery } from "@/graphql/generated/graphql";

const SetsContext = createContext<{
  data: GetSetsQuery | undefined;
  loading: boolean;
  error: ApolloError | undefined;
}>({ data: undefined, loading: false, error: undefined });

export default SetsContext;
