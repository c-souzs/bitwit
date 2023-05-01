import React, { lazy } from "react"
import { useRouter } from "next/router"

import Cookies from "js-cookie"
import { useMutation } from "react-query"

import { fetchStatusPayment } from "service/customFetcher"

import PaymentButton from "components/home/PaymentButton"
import LayoutMain from "components/layout/Main"
import FormRegister from "components/register/Form"
import Button from "components/ui/Button"
import Loader from "components/ui/Loader"


const AlertNotPayment = () => (
        <div>
            <p>Faça a compra para realizar o cadastro.</p>
            <PaymentButton>
                Comprar
            </PaymentButton>
        </div>
)
type WaitingPaymentProps = {
    idTransactionCookie: string
    verifyPayment: (value: string) => void
}

const WaitingPayment = ({ verifyPayment, idTransactionCookie }: WaitingPaymentProps) => (
    <div>
        <p>Seu pagamento ainda não foi aprovado.</p>
        <Button
            onClick={() => verifyPayment(idTransactionCookie)}
        >
            Verificar pagamento
        </Button>
    </div>
)

const ParticleLazy = lazy(() => import('components/register/Particle'))

const Register = () => {
    const router = useRouter()
    const [idTransactionCookie, setIdTransactionCookie] = React.useState<undefined | string>(undefined)

    React.useEffect(() => {
        const query = new URLSearchParams(window.location.search)
        if (query.get('canceled')) router.push('/404')
        else {
            const cookie = Cookies.get('idTransaction')
            setIdTransactionCookie(cookie)
        }
    }, [])

    const { data, isLoading, mutate: verifyPayment } = useMutation(
        fetchStatusPayment, {
            onError: () => {
                console.log('Erro bem aqui')
            }
        })

    React.useEffect(() => {
        if(idTransactionCookie) verifyPayment(idTransactionCookie)
    }, [idTransactionCookie])

    React.useEffect(() => {
        if(data && data.statusTransaction) router.push('/register')
    }, [data])

    return (
        <LayoutMain footer>
            {(idTransactionCookie && data && data.statusTransaction) && <ParticleLazy />}
            <section className=' bg-glacial-emerald-50 h-full py-8 relative'>
                <div className='max-w-6xl h-full w-full mx-auto px-5 flex flex-col items-center gap-4'>
                    {isLoading && <Loader />}

                    {!idTransactionCookie && <AlertNotPayment/> }

                    {(idTransactionCookie && data && data.statusTransaction) && <FormRegister />}

                    { (idTransactionCookie && data && !data.statusTransaction) && <WaitingPayment idTransactionCookie={idTransactionCookie} verifyPayment={verifyPayment} /> }
                </div>
            </section>
        </LayoutMain>
    )
}

export default Register