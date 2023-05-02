import React from "react"
import { roboto, robotoMono } from "pages/_app"

import classNames from "classnames"

import Button from "components/ui/Button"
import useTyping from "hooks/useTyping"
import PaymentButton from "../PaymentButton"
import { useSession } from "next-auth/react"

type IntroductionProps = {
    dataAnimation: string[]
}

const AlertScroll = () => {
    return (
        <div 
            className='absolute bottom-12 left-2/4 right-2/4 hidden sm:block'
            role='alert'
            aria-label='Role a página para acessar os posts do blog.'
            title='Role para ver mais posts.'
            >
            <div className='h-[21px] w-[14px] rounded-lg transform-none border-emerald-600 border-2'>
                <div className='h-[5px] w-0.5 block my-1 mx-auto bg-emerald-600 relative animate-mouse'/>
            </div>
            <div>
                <span className='block w-[5px] h-[5px] rotate-45 border-emerald-600 border-r-2 border-b-2 mb-[3px] ml-[5px] animate-mouse-scroll delay-100 direction-alternate mt-[6px]' />
                <span className='block w-[5px] h-[5px] rotate-45 border-emerald-600 border-r-2 border-b-2 mb-[3px] ml-[5px] animate-mouse-scroll delay-200 direction-alternate' />
                <span className='block w-[5px] h-[5px] rotate-45 border-emerald-600 border-r-2 border-b-2 mb-[3px] ml-[5px] animate-mouse-scroll delay-300 direction-alternate' />
            </div>
        </div>
    )
}

const Introduction = ({ dataAnimation }: IntroductionProps) => {
    const text = useTyping(dataAnimation)

    const { data: session } = useSession()

    return (
        <section
            className='h-[calc(100vh-80px)] relative'
        >
            <div className='max-w-6xl h-full w-full mx-auto px-5 flex items-center justify-center'>
                <div className='flex flex-col items-center justify-center text-center 
                    lg:mb-24'>
                    <h1 
                        className='text-4xl text-emerald-500 font-semibold mb-3 
                            sm:text-5xl sm:max-w-[675px]'> 
                        Códigos, dicas & tutoriais em um  único acesso 
                        <span 
                            className='inline-block text-3xl ml-1'
                            role='img'
                            aria-label='Emoji de xícara de café'
                        >
                            💻
                        </span>
                    </h1>
                    <p className={classNames('uppercase text-sm text-emerald-500 mb-3 after:content-["|"] after:ml-1 after:font-semibold after:animate-blink', robotoMono.className)}> 
                        &nbsp { text }
                    </p>
                    <p className={`${roboto.className} text-lg mb-5 max-w-[550px]`}> 
                        {
                            (session && session.user) ? `Bem-vindo à nossa comunidade, ${session.user?.name}! Aqui você encontrará tudo o que precisa saber sobre front-end e back-end, além de ter a oportunidade de se conectar com outros entusiastas da área.` :
                            'Descubra tudo sobre front-end e back-end e participe da nossa incrível comunidade. Tudo isso a um preço acessível, que cabe no seu orçamento. Junte-se a nós agora mesmo para aproveitar essa oportunidade única!'
                        }
                    </p>
                    {
                        !session && (
                            <PaymentButton>
                                INSCREVA-SE
                            </PaymentButton>
                        )
                    }
                </div>
            </div>
            <AlertScroll />
        </section>
    )
}

export default Introduction