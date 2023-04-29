import { gql } from 'graphql-request'

export const GET_POSTS_PAGINATION = gql`
    query getPostsPagination($title: String, $postsPerPage: Int, $currentPage: Int) {
        posts (where: {title_contains: $title}, first: $postsPerPage, skip: $currentPage) {
            title
            slug
            excerpt
            free
            tags {
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
            tags {
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

export const GET_POSTS_CONTAINS_TITLE = gql`
    query getPostsContainsTitle($contains: String) {
        posts(where: { title_contains: $contains }) {
            coverImage {
                url
            }
            seo {
                description
                keywords
                title
            }
            title
            tags {
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
            slug
        }
    }
`