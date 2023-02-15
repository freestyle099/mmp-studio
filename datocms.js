import { GraphQLClient } from 'graphql-request';

export function request({ query, variables }) {
  const headers = { authorization: 'Bearer 73192eea1018059e05440ee8ba0001' };
  const endpoint = process.env.MMPSTUDIO_DATO_PREVIEW
    ? 'https://graphql.datocms.com/preview'
    : 'https://graphql.datocms.com/';
  const client = new GraphQLClient(endpoint, { headers });
  return client.request(query, variables);
}
