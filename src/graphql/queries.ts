import { gql } from 'graphql-request'

export const GET_POSTS = gql`
    query getPOsts {
        posts {
            title
            tags
            slug
            excerpt
        }
    }
`