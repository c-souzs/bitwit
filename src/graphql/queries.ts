import { gql } from 'graphql-request'

export const GET_POSTS_PAGINATION = gql`
    query getPostsPagination($postsPerPage: Int, $currentPage: Int) {
        posts (first: $postsPerPage, skip: $currentPage) {
            title
            slug
            excerpt
            tag {
                name
            }
            coverImage {
                url
            }
        }
    }
`

export const GET_TAGS = gql`
    query getTags {
        tags {
            name
        }
    }
`