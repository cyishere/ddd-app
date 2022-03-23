require("dotenv").config();

const API = process.env.HASURA_GRAPHQL_API;

module.exports = {
  schema: [
    {
      [API]: {
        headers: {
          "content-type": "application/json",
          "x-hasura-admin-secret": process.env.HASURA_ADMIN_SECRET,
        },
      },
    },
  ],
  documents: ["./graphql/**/*.graphql"],
  overwrite: true,
  generates: {
    "./graphql/generated/graphql.tsx": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        skipTypename: false,
        withHooks: true,
        withHOC: false,
        withComponent: false,
      },
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};
