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
            free
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

export const GET_AUTHOR_BY_EMAIL = gql`
    query getAuthorByEmail($email: String) {
        author(where: {email: $email}) {
            id
            name
            email
            password
        }
    }
`

export const GET_PAYMENT_BY_ID_TRANSACTION = gql`
    query getPaymentByIdTransaction($idTransaction: String) {
        payment(where: {idTransaction: $idTransaction}) {
            idTransaction
            statusTransaction
        }
    }
`

export const MUTATION_CREATE_AUTHOR = gql`
    mutation postCreateAuthor($name: String!, $email: String!, $password: String!) {
        createAuthor(data: {name: $name, email: $email, password: $password}) {
            email
            password
        }
    }
`

export const MUTATION_CREATE_PAYMENT = gql`
    mutation postCreatePayment($idPayment: String!) {
        createPayment(data: { idTransaction: $idPayment, statusTransaction: false }) {
            id
            idTransaction
        }
    }
`

export const MUTATION_UPDATE_PAYMENT = gql`
    mutation updatePaymentStatus($idPayment: String){
        updatePayment(where: {idTransaction: $idPayment}, data: {statusTransaction: true}) {
            id
        }
    }
`

export const MUTATION_PUBLISHED_PAYMENT = gql`
    mutation postPublishedPayment($id: ID){
        publishPayment(where: {id: $id}) {
            id
        }
    }
`

export const MUTATION_PUBLISHED_AUTHOR = gql`
    mutation postPublishedAuthor($email: String){
        publishAuthor(where: {email: $email}) {
            id
        }
    }
`