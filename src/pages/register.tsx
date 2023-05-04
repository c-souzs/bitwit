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
import { GetServerSideProps } from "next"
import { getServerSession } from "next-auth"
import { authOptions } from "./api/auth/[...nextauth]"
import { NextSeo } from "next-seo"

const AlertNotPayment = () => (
        <div className='flex flex-col gap-4 items-center'>
            <p className='text-lg text-center'>Faça a compra para realizar o cadastro 💳</p>
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
    <div className='flex flex-col gap-4 items-center'>
        <p className='text-lg text-center'>Seu pagamento ainda não foi aprovado 💳❌</p>
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
            // onError: () => {
            //     console.log('Erro bem aqui')
            // }
        })

    React.useEffect(() => {
        if(idTransactionCookie) verifyPayment(idTransactionCookie)
    }, [idTransactionCookie])

    React.useEffect(() => {
        if(data && data.statusTransaction) router.push('/register')
    }, [data])

    return (
        <>
            <NextSeo 
                title='Registro | Bitwit'
                description='Você está a um passo de acessar o melhor conteúdo sobre javascript, front-end e back'
                additionalMetaTags={[{
                    name: 'keywords',
                    content: 'blog, programação, javascript, typescript, bitwit, tecnologia, front-end, back-end, node'
                }]}
            />
            <LayoutMain footer>
                {(idTransactionCookie && data && data.statusTransaction) && <ParticleLazy />}
                <section className=' bg-glacial-emerald-50 h-full py-8 relative'>
                    <div className='max-w-6xl h-full w-full mx-auto px-5 flex flex-col items-center gap-4'>
                        {isLoading && <Loader />}

                        {(!idTransactionCookie && !isLoading) && <AlertNotPayment/> }

                        {(idTransactionCookie && data && data.statusTransaction && !isLoading) && <FormRegister />}

                        { (idTransactionCookie && data && !data.statusTransaction && !isLoading) && <WaitingPayment idTransactionCookie={idTransactionCookie} verifyPayment={verifyPayment} /> }
                    </div>
                </section>
            </LayoutMain>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({req, res}) => {
    const session = await getServerSession(req, res, authOptions)

    if(session) return { redirect: { destination: '/', permanent: true } }
    
    return {
        props: {}
    }
}

export default Register