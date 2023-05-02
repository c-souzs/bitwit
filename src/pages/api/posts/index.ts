import client from "graphql/client";
import { GetPostsPaginationQuery } from "graphql/generated/graphql";
import { GET_POSTS_PAGINATION } from "graphql/queries";
import { NextApiHandler } from "next";
import { getServerSession } from "next-auth";
import { postsPerPage } from 'service/queryClient'
import { authOptions } from "../auth/[...nextauth]";

const handlerGet: NextApiHandler = async (req, res) => {
    const { query } = req
    const { currentPage: currentPageQuery, title } = query 
    const currentPageNumber = Number(currentPageQuery)

    const session = await getServerSession(req, res, authOptions)
    
    try {
        if((session && session.user) || (!session && currentPageNumber < 3)) {
            const { posts } = await client.request<GetPostsPaginationQuery>(GET_POSTS_PAGINATION, { 
                postsPerPage, 
                currentPage: currentPageNumber === 0 ? currentPageNumber : (currentPageNumber * postsPerPage) - postsPerPage,
                title: title || ''
            })
            
            return res.status(200).json({
                posts
            })
        } else {
            return res.status(200).json({
                posts: []
            })
        }

    } catch (error) {
        return res.status(500).json({
            message: 'Erro interno ao buscar posts.'
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