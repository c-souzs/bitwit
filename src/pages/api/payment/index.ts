import { NextApiHandler } from "next"

import client from "graphql/client"
import { GetPaymentByIdTransactionQuery } from "graphql/generated/graphql"
import { GET_PAYMENT_BY_ID_TRANSACTION } from "graphql/queries"

const handlerGet: NextApiHandler = async (req, res) => {
    const { query } = req
    const { idTransaction } = query

    try {
        const { payment } = await client.request<GetPaymentByIdTransactionQuery>(GET_PAYMENT_BY_ID_TRANSACTION, { idTransaction })
        
        return res.status(200).json({idTransaction, statusTransaction: payment?.statusTransaction || false})
    } catch (error) {
        return res.status(500).json({
            message: 'Erro interno ao verificar pagamento.'
        })
    }
}

const handler: NextApiHandler = (req, res) => {
    const { method } = req

    switch (method) {
        case 'GET':
            handlerGet(req, res)
            break
    
        default:
            break
    }
}

export default handler