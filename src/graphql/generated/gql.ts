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
    "\n    query getPostsPagination($postsPerPage: Int, $currentPage: Int) {\n        posts (first: $postsPerPage, skip: $currentPage) {\n            title\n            slug\n            excerpt\n            tag {\n                name\n            }\n            coverImage {\n                url\n            }\n        }\n    }\n": types.GetPostsPaginationDocument,
    "\n    query getTags {\n        tags {\n            name\n        }\n    }\n": types.GetTagsDocument,
    "\n    query getPostsSlug($first: Int) {\n        posts(first: $first) {\n            slug\n        }\n    }\n": types.GetPostsSlugDocument,
    "\n    query getPostBySlug($slug: String) {\n        post(where: { slug: $slug }) {\n            coverImage {\n                url\n            }\n            seo {\n                description\n                keywords\n                title\n            }\n            title\n            tag {\n                name\n            }\n            content {\n                html\n            }\n            author {\n                name\n                picture {\n                    url\n                }\n            }\n            createdAt\n        }\n    }\n": types.GetPostBySlugDocument,
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
export function graphql(source: "\n    query getPostsPagination($postsPerPage: Int, $currentPage: Int) {\n        posts (first: $postsPerPage, skip: $currentPage) {\n            title\n            slug\n            excerpt\n            tag {\n                name\n            }\n            coverImage {\n                url\n            }\n        }\n    }\n"): (typeof documents)["\n    query getPostsPagination($postsPerPage: Int, $currentPage: Int) {\n        posts (first: $postsPerPage, skip: $currentPage) {\n            title\n            slug\n            excerpt\n            tag {\n                name\n            }\n            coverImage {\n                url\n            }\n        }\n    }\n"];
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
export function graphql(source: "\n    query getPostBySlug($slug: String) {\n        post(where: { slug: $slug }) {\n            coverImage {\n                url\n            }\n            seo {\n                description\n                keywords\n                title\n            }\n            title\n            tag {\n                name\n            }\n            content {\n                html\n            }\n            author {\n                name\n                picture {\n                    url\n                }\n            }\n            createdAt\n        }\n    }\n"): (typeof documents)["\n    query getPostBySlug($slug: String) {\n        post(where: { slug: $slug }) {\n            coverImage {\n                url\n            }\n            seo {\n                description\n                keywords\n                title\n            }\n            title\n            tag {\n                name\n            }\n            content {\n                html\n            }\n            author {\n                name\n                picture {\n                    url\n                }\n            }\n            createdAt\n        }\n    }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;