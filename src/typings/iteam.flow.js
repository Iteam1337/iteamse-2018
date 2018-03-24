// @flow

export type ApolloBase<Data = {}> = {
  data: {
    ...$Exact<Data>,
  },
  error?: {
    message: string,
  },
  loading: boolean,
}

export type ValidLocation = '' | 'Stockholm' | 'Göteborg'
