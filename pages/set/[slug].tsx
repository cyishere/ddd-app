import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import { gql } from "@apollo/client";

import type { Set } from "@/utils/types";
import { createApolloClient } from "@/lib/apolloClient";

interface SetProps extends InferGetStaticPropsType<typeof getStaticProps> {
  set: Set;
}

const Set: NextPage<SetProps> = ({ set }) => {
  console.log({ set });

  // TODO the page layout
  // TODO fetch the words in this set

  return <h1>{set.name}</h1>;
};

const GET_SETS = gql`
  query GetSets {
    sets {
      id
      name
      slug
    }
  }
`;

const apolloClient = createApolloClient();

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await apolloClient.query({ query: GET_SETS });

  const paths = data.sets.map((set: Set) => {
    return {
      params: {
        slug: set.slug,
      },
    };
  });

  return {
    fallback: false,
    paths: paths,
  };
};

const GET_ONE_SET = gql`
  query GetOneSet($slug: String!) {
    sets(where: { slug: { _eq: $slug } }) {
      id
      name
      slug
    }
  }
`;

export const getStaticProps: GetStaticProps = async (context) => {
  // @ts-ignore
  const { slug } = context.params;
  const { data } = await apolloClient.query({
    query: GET_ONE_SET,
    variables: { slug },
  });

  return {
    props: { set: data.sets[0] },
  };
};

export default Set;
