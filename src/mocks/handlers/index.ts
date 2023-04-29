import { handlersPosts } from "./api/posts";
import { handlersTags } from "./graphql/tags";

export const handlers = [...handlersPosts, ...handlersTags]