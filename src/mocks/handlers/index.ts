import { handlersPosts } from "./api/posts";
import { handlersPostSlug } from "./graphql/post";
import { handlersTags } from "./graphql/tags";

export const handlers = [...handlersPosts, ...handlersTags, ...handlersPostSlug]