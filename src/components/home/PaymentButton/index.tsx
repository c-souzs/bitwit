import { ReactNode } from 'react'

import Cookies from 'js-cookie'
import { loadStripe } from '@stripe/stripe-js'

import { api } from 'service/axios'

import Button from 'components/ui/Button'

loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

interface IPaymentButtonProps {
    children: ReactNode
}

type DataRedirect = {
    redirectUrl: string
    idTransaction: string
}

const PaymentButton = ({ children }: IPaymentButtonProps) => {
    const handlerPurchase = async () => {
        const data: { data: DataRedirect } = await api.post('checkout_sessions', {
            priceId: 'price_1N2lZZBuqyQVJfHOqaqtoBpg'
        })
        const { data: { redirectUrl, idTransaction } } = data

        window.location.href = redirectUrl
        Cookies.set('idTransaction', idTransaction);
    }

    return (
        <Button
            aria-label='Vai para a página de planos de acesso do blog.'
            onClick={() => handlerPurchase()}
            data-testid='payment-button'
        >
            {children}
        </Button>
    )
}

export default PaymentButton