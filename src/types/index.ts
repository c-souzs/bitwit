import { Post } from "graphql/generated/graphql";

export type PostCardData = Pick<Post, 'coverImage' | 'title' | 'tag' | 'excerpt' | 'slug'>
