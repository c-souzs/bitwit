import { NextApiHandler } from "next";
import { hash } from 'bcrypt'
import client from "graphql/client";
import { MUTATION_CREATE_AUTHOR, MUTATION_PUBLISHED_AUTHOR } from "graphql/queries";
import { PostCreateAuthorMutation, PostPublishedAuthorMutation } from "graphql/generated/graphql";

type BodyAuthor = {
    name: string
    password: string
    email: string
}

const handlerPost: NextApiHandler = async (req, res) => {
    const { body } = req
    const { email, name, password } = body as BodyAuthor

    try {
        const passwordHash = await hash(password, 12)

        const { createAuthor } = await client.request<PostCreateAuthorMutation>(MUTATION_CREATE_AUTHOR, { email, name, password: passwordHash })
        
        if(createAuthor) {
            const { email, password } = createAuthor

            await client.request<PostPublishedAuthorMutation>(MUTATION_PUBLISHED_AUTHOR, { email })
            
            return res.status(200).json({
                email, password
            })
        }
    } catch (error) {
        return res.status(500).json({
            message: 'Erro interno ao criar o autor.'
        })
    }
}

const handler: NextApiHandler = (req, res) => {
    const { method } = req

    switch (method) {
        case 'POST':
            handlerPost(req, res)
            break;
    
        default:
            break;
    }
}

export default handler