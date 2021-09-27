/* eslint-disable import/prefer-default-export */
import { CMSGraphQLClient, gql } from '../../../infra/cms/CMSGraphQLClient';

export async function getContent() {
  const query = gql`
    {
        allPageCasePortfolios {
        id
        title
        description
        ref {
            description
        }
        }
    }
  `;

  const client = CMSGraphQLClient();

  const response = await client.query({ query });

  return response.data.messages;
}
