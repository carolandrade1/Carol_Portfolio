import { GraphQLClient, gql as GraphQLTag } from 'graphql-request';

export const gql = GraphQLTag;

export function CMSGraphQLClient() {
  const TOKEN = process.env.DATO_CMS_TOKEN;
  const DatoCMSURL = 'https://graphql.datocms.com/';
  const client = new GraphQLClient(DatoCMSURL, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });

  return {
    async query({ query }) {
      const messages = await client.request(query);

      return {
        data: {
          messages,
        },
      };
    },
  };
}
