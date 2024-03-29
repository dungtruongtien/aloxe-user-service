import { gql } from 'apollo-server-express'
import userGraphql from './user'
import { mergeRawSchemas } from '../../helpers/mergeRawSchemas'
import { type DocumentNode } from 'graphql'

export default mergeRawSchemas(
  {
    typeDefs: [
      // we create empty main types, we can later extend them in the shards
      gql`
        type Query {
          _empty: String
        }

        type Mutation {
          _empty: String
        }
      `
    ],
    resolvers: {}
  },
  mergeRawSchemas(userGraphql)
) as DocumentNode
