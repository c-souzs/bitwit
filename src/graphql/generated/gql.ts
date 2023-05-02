/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n    query getPostsPagination($title: String, $postsPerPage: Int, $currentPage: Int) {\n        posts (where: {title_contains: $title}, first: $postsPerPage, skip: $currentPage) {\n            title\n            slug\n            excerpt\n            free\n            tags {\n                name\n            }\n            coverImage {\n                url\n            }\n        }\n    }\n": types.GetPostsPaginationDocument,
    "\n    query getTags {\n        tags {\n            name\n        }\n    }\n": types.GetTagsDocument,
    "\n    query getPostsSlug($first: Int) {\n        posts(first: $first) {\n            slug\n        }\n    }\n": types.GetPostsSlugDocument,
    "\n    query getPostBySlug($slug: String) {\n        post(where: { slug: $slug }) {\n            coverImage {\n                url\n            }\n            seo {\n                description\n                keywords\n                title\n            }\n            free\n            title\n            tags {\n                name\n            }\n            content {\n                html\n            }\n            author {\n                name\n                picture {\n                    url\n                }\n            }\n            createdAt\n        }\n    }\n": types.GetPostBySlugDocument,
    "\n    query getAuthorByEmail($email: String) {\n        author(where: {email: $email}) {\n            id\n            name\n            email\n            password\n        }\n    }\n": types.GetAuthorByEmailDocument,
    "\n    query getPaymentByIdTransaction($idTransaction: String) {\n        payment(where: {idTransaction: $idTransaction}) {\n            idTransaction\n            statusTransaction\n        }\n    }\n": types.GetPaymentByIdTransactionDocument,
    "\n    mutation postCreateAuthor($name: String!, $email: String!, $password: String!) {\n        createAuthor(data: {name: $name, email: $email, password: $password}) {\n            email\n            password\n        }\n    }\n": types.PostCreateAuthorDocument,
    "\n    mutation postCreatePayment($idPayment: String!) {\n        createPayment(data: { idTransaction: $idPayment, statusTransaction: false }) {\n            id\n            idTransaction\n        }\n    }\n": types.PostCreatePaymentDocument,
    "\n    mutation updatePaymentStatus($idPayment: String){\n        updatePayment(where: {idTransaction: $idPayment}, data: {statusTransaction: true}) {\n            id\n        }\n    }\n": types.UpdatePaymentStatusDocument,
    "\n    mutation postPublishedPayment($id: ID){\n        publishPayment(where: {id: $id}) {\n            id\n        }\n    }\n": types.PostPublishedPaymentDocument,
    "\n    mutation postPublishedAuthor($email: String){\n        publishAuthor(where: {email: $email}) {\n            id\n        }\n    }\n": types.PostPublishedAuthorDocument,
    "\n    mutation deletePayment($idTransaction: String) {\n        deletePayment(where: {idTransaction: $idTransaction}) {\n            id\n        }\n    }\n": types.DeletePaymentDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query getPostsPagination($title: String, $postsPerPage: Int, $currentPage: Int) {\n        posts (where: {title_contains: $title}, first: $postsPerPage, skip: $currentPage) {\n            title\n            slug\n            excerpt\n            free\n            tags {\n                name\n            }\n            coverImage {\n                url\n            }\n        }\n    }\n"): (typeof documents)["\n    query getPostsPagination($title: String, $postsPerPage: Int, $currentPage: Int) {\n        posts (where: {title_contains: $title}, first: $postsPerPage, skip: $currentPage) {\n            title\n            slug\n            excerpt\n            free\n            tags {\n                name\n            }\n            coverImage {\n                url\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query getTags {\n        tags {\n            name\n        }\n    }\n"): (typeof documents)["\n    query getTags {\n        tags {\n            name\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query getPostsSlug($first: Int) {\n        posts(first: $first) {\n            slug\n        }\n    }\n"): (typeof documents)["\n    query getPostsSlug($first: Int) {\n        posts(first: $first) {\n            slug\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query getPostBySlug($slug: String) {\n        post(where: { slug: $slug }) {\n            coverImage {\n                url\n            }\n            seo {\n                description\n                keywords\n                title\n            }\n            free\n            title\n            tags {\n                name\n            }\n            content {\n                html\n            }\n            author {\n                name\n                picture {\n                    url\n                }\n            }\n            createdAt\n        }\n    }\n"): (typeof documents)["\n    query getPostBySlug($slug: String) {\n        post(where: { slug: $slug }) {\n            coverImage {\n                url\n            }\n            seo {\n                description\n                keywords\n                title\n            }\n            free\n            title\n            tags {\n                name\n            }\n            content {\n                html\n            }\n            author {\n                name\n                picture {\n                    url\n                }\n            }\n            createdAt\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query getAuthorByEmail($email: String) {\n        author(where: {email: $email}) {\n            id\n            name\n            email\n            password\n        }\n    }\n"): (typeof documents)["\n    query getAuthorByEmail($email: String) {\n        author(where: {email: $email}) {\n            id\n            name\n            email\n            password\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query getPaymentByIdTransaction($idTransaction: String) {\n        payment(where: {idTransaction: $idTransaction}) {\n            idTransaction\n            statusTransaction\n        }\n    }\n"): (typeof documents)["\n    query getPaymentByIdTransaction($idTransaction: String) {\n        payment(where: {idTransaction: $idTransaction}) {\n            idTransaction\n            statusTransaction\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation postCreateAuthor($name: String!, $email: String!, $password: String!) {\n        createAuthor(data: {name: $name, email: $email, password: $password}) {\n            email\n            password\n        }\n    }\n"): (typeof documents)["\n    mutation postCreateAuthor($name: String!, $email: String!, $password: String!) {\n        createAuthor(data: {name: $name, email: $email, password: $password}) {\n            email\n            password\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation postCreatePayment($idPayment: String!) {\n        createPayment(data: { idTransaction: $idPayment, statusTransaction: false }) {\n            id\n            idTransaction\n        }\n    }\n"): (typeof documents)["\n    mutation postCreatePayment($idPayment: String!) {\n        createPayment(data: { idTransaction: $idPayment, statusTransaction: false }) {\n            id\n            idTransaction\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation updatePaymentStatus($idPayment: String){\n        updatePayment(where: {idTransaction: $idPayment}, data: {statusTransaction: true}) {\n            id\n        }\n    }\n"): (typeof documents)["\n    mutation updatePaymentStatus($idPayment: String){\n        updatePayment(where: {idTransaction: $idPayment}, data: {statusTransaction: true}) {\n            id\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation postPublishedPayment($id: ID){\n        publishPayment(where: {id: $id}) {\n            id\n        }\n    }\n"): (typeof documents)["\n    mutation postPublishedPayment($id: ID){\n        publishPayment(where: {id: $id}) {\n            id\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation postPublishedAuthor($email: String){\n        publishAuthor(where: {email: $email}) {\n            id\n        }\n    }\n"): (typeof documents)["\n    mutation postPublishedAuthor($email: String){\n        publishAuthor(where: {email: $email}) {\n            id\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation deletePayment($idTransaction: String) {\n        deletePayment(where: {idTransaction: $idTransaction}) {\n            id\n        }\n    }\n"): (typeof documents)["\n    mutation deletePayment($idTransaction: String) {\n        deletePayment(where: {idTransaction: $idTransaction}) {\n            id\n        }\n    }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;