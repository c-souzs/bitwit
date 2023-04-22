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

export const GET_POSTS_SLUG = gql`
    query getPostsSlug($first: Int) {
        posts(first: $first) {
            slug
        }
    }
`

export const GET_POST_BY_SLUG = gql`
    query getPostBySlug($slug: String) {
        post(where: { slug: $slug }) {
            coverImage {
                url
            }
            seo {
                description
                keywords
                title
            }
            title
            tag {
                name
            }
            content {
                html
            }
            author {
                name
                picture {
                    url
                }
            }
            createdAt
        }
    }
`