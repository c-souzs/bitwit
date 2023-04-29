import { Tag } from 'graphql/generated/graphql'
import { graphql } from 'msw'

const successTags = graphql.query('getTags', (_, res, ctx) => {
    return res(
        ctx.data({
            tags: [...Array(3)].map((_, i) => ({ name: `TEST ${i}` })) as Tag[]
        })
    )
})

export const handlersTags = [
    successTags
]