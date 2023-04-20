import client from "graphql/client";
import { GetPostsPaginationQuery } from "graphql/generated/graphql";
import { GET_POSTS_PAGINATION } from "graphql/queries";
import { NextApiHandler } from "next";

const postsPerPage = 2
const handlerGet: NextApiHandler = async (req, res) => {
    const { query } = req
    const { currentPage: currentPageQuery } = query 
    const currentPageNumber = Number(currentPageQuery)
    
    try {
        const { posts } = await client.request<GetPostsPaginationQuery>(GET_POSTS_PAGINATION, { postsPerPage, currentPage: (currentPageNumber * postsPerPage) - postsPerPage})

        return res.status(200).json({
            posts
        })

    } catch (error) {
        return res.status(500).json({
            message: 'Erro interno.'
        })
    }
}

const handler: NextApiHandler = async (req, res) => {
    const { method } = req

    switch (method) {
        case 'GET':
            handlerGet(req, res)
            break;
        default:
            return res.status(404).json({
                message: 'Rota não encontrada.'
            })
    }
}

export default handler