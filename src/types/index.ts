import { Post } from "graphql/generated/graphql";

export type PostCardData = Pick<Post, 'coverImage' | 'title' | 'tags' | 'excerpt' | 'slug' | 'free'>

export type DataResponsePayment = {
    idTransaction: string
    statusTransaction: boolean
}
