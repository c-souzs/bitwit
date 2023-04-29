import { Tag } from 'graphql/generated/graphql'
import { graphql } from 'msw'

const successTags = graphql.query('getPostBySlug', (req, res, ctx) => {
    const { slug } = req.variables

    return res(
        ctx.data({
            post: {

            }
        })
    )
})
