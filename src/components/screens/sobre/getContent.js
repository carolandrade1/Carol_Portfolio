/* eslint-disable import/prefer-default-export */
import { CMSGraphQLClient, gql } from '../../../infra/cms/CMSGraphQLClient';

export async function getContent() {
  const query = gql`
    {
      allPageSobres {
        id
        imageUrl
        name
        siteUrl
      }
    }
  `;

  const client = CMSGraphQLClient();

  const response = await client.query({ query });

  return response.data.messages;
}
