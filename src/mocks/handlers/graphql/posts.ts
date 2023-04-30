import { graphql } from "msw"

const handlerPostBySlugGet = graphql.query('getPostsSlug', (req, res, ctx) => {

    const { first } = req.variables 

    const posts = [...Array(first)].map((_, index) => ({ slug:  `post-static-paths-${index}`}))

    return res(
        ctx.data({
            posts
        })
    )
})

export const handlersPostSlug = [
    handlerPostBySlugGet
]