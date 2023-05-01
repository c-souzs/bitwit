import { NextApiHandler } from "next"

import { buffer } from "micro"
import Stripe from 'stripe'

import client from "graphql/client"
import { MUTATION_PUBLISHED_PAYMENT, MUTATION_UPDATE_PAYMENT } from "graphql/queries"
import { PostPublishedPaymentMutation, UpdatePaymentStatusMutation } from "graphql/generated/graphql"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: '2022-11-15'
})

export const config = {
    api: {
      bodyParser: false,
    },
};

type CheckoutSession = {
    id: string
}

const handlerPost: NextApiHandler = async (req, res) => {
    const buf = await buffer(req);
    const sig = req.headers['stripe-signature'] as string;
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET as string;

    let event: Stripe.Event;

    try {
        event = stripe.webhooks.constructEvent(buf, sig, webhookSecret);
    } catch (error) {
        return res.status(400).send('Webhook error')
    }

    switch (event.type) {
        case 'checkout.session.completed':
            const checkoutSession = event.data.object as CheckoutSession

            const { updatePayment } = await client.request<UpdatePaymentStatusMutation>(MUTATION_UPDATE_PAYMENT, { idPayment: checkoutSession.id })
            
            if(updatePayment) await client.request<PostPublishedPaymentMutation>(MUTATION_PUBLISHED_PAYMENT, { id: updatePayment.id })
            break;
        default:
            break;
    }

    return res.send({ received: true })
}

const handler: NextApiHandler = (req, res) => {
    const { method } = req    

    switch (method) {
        case 'POST':
            handlerPost(req, res)
            break;
        default:
            return res.status(404).json({
                message: 'Rota não encontrada.'
            })
    }
}

export default handler