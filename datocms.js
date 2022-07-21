import { GraphQLClient } from 'graphql-request';

import { datoToken, preview } from '~/config/dev';

export function request({ query, variables }) {
  const headers = { authorization: `Bearer ${datoToken}` };
  const endpoint = preview
    ? 'https://graphql.datocms.com/preview'
    : 'https://graphql.datocms.com/';
  const client = new GraphQLClient(endpoint, { headers });
  return client.request(query, variables);
}
