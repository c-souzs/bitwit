import { Asset, Maybe, Tag } from 'graphql/generated/graphql'
import { rest } from 'msw'
import { postsPerPage } from 'service/queryClient'
import { PostCardData } from 'types'

// Cria posts com dados fake baseado no currentPage ou title
const createPosts  = (currentPage: number, title?: string, amount = postsPerPage) => {
    const posts = [...Array(amount)].map((_, index) => {
        const mutipleTen = currentPage * 10
        const titleCreate = title || `Post create fake by currentPage ${mutipleTen + index}`
        const slugTitle = titleCreate.toLocaleLowerCase().replace(/\s+/g, '-')
        
        const post: PostCardData = {
            title: titleCreate,
            excerpt: `This is the body of post ${mutipleTen + index}`,
            coverImage: {
                url: 'https://media.graphassets.com/vJKf6PjRua0OGUeNk4Wc'
            } as Maybe<Asset>,
            tags: [...Array(3)].map((_, i) => ({ name: `TEST ${mutipleTen + 5 + i * 5}` })) as Tag[],
            slug: `${slugTitle}-${mutipleTen + index}`,
            free: currentPage <= 2
        }

        return post
    })

    return posts
}

// Posts fake gerado para testar
export const dataCurretPage01 = {
    data: createPosts(1),
    nextPage: 2,
    hasNextPage: true,
}

export const dataCurretPage02 = {
    data: [...dataCurretPage01.data, ...createPosts (2)],
    nextPage: 3,
    hasNextPage: true
}

export const dataCurretPage03 = {
    data: [...dataCurretPage02.data, ...createPosts (2)],
    hasNextPage: false
}

export const dataTitleSearch = {
    data: createPosts (0, 'Redux'),
    hasNextPage: false
}

export const dataTitleSearchEmpty = {
    data: [],
    hasNextPage: false
}

// Intercepta a função e baseado no currentPage e title retornado posts fake
const handlerPostsGet = rest.get('https://bitwit-souzzs.vercel.app/api/posts?currentPage=1&title=', async (req, res, ctx) => {
    const currentPage = req.url.searchParams.get('currentPage') as string
    const currentPageNumber = Number(currentPage)

    const title = req.url.searchParams.get('title') as string

    if(currentPageNumber < 3 && title != 'Empty') {
        if(title && title.length) {
            const dataWithTitleSearch = createPosts (currentPageNumber, title)
            return res(
                ctx.status(200),
                ctx.json({
                    posts: dataWithTitleSearch
                })
            )
        } else {
            const dataCurretPage = createPosts (currentPageNumber)
            return res(
                ctx.status(200),
                ctx.json({
                    posts: dataCurretPage
                })
            )
        }
    } else {
        return res(
            ctx.status(200),
            ctx.json({
                posts: []
            })
        )
    }

})

export const handlersPosts = [ handlerPostsGet ]