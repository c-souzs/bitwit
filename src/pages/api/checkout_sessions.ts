import client from "graphql/client";
import { PostCreatePaymentMutation, PostPublishedPaymentMutation } from "graphql/generated/graphql";
import { MUTATION_CREATE_PAYMENT, MUTATION_PUBLISHED_PAYMENT } from "graphql/queries";
import { NextApiHandler } from "next";

import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: '2022-11-15'
})

type Body = {
    priceId: string
}

const handlerPost: NextApiHandler = async (req, res) => {
    const { body } = req
    const { priceId } = body as Body

    try {
        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                    price: priceId,
                    quantity: 1
                }
            ],
            mode: 'payment',
            success_url: `http://localhost:3000/register?success=true`,
            cancel_url: `http://localhost:3000/register?canceled=true`
        })

        const idTransaction = session.id

        const { createPayment } = await client.request<PostCreatePaymentMutation>(MUTATION_CREATE_PAYMENT, { idPayment: idTransaction })
        if(createPayment?.id) await client.request<PostPublishedPaymentMutation>(MUTATION_PUBLISHED_PAYMENT, { id: createPayment.id})

        return res.status(200).json({
            redirectUrl: session.url,
            idTransaction
        })
    } catch (error) {
        return res.status(400).json({
            message: 'Erro de conexão com o stripe'
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