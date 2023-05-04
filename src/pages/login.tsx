import React from "react"

import LayoutMain from "components/layout/Main"
import FormLogin from "components/login/Form"
import { GetServerSideProps } from "next"
import { getServerSession } from "next-auth"
import { authOptions } from "./api/auth/[...nextauth]"
import { NextSeo } from "next-seo"

const Login = () => {
    return (
        <>
            <NextSeo 
                title='Login | Bitwit'
                description='Você está a um passo de acessar o melhor conteúdo sobre javascript, front-end e back'
                additionalMetaTags={[{
                    name: 'keywords',
                    content: 'blog, programação, javascript, typescript, bitwit, tecnologia, front-end, back-end, node'
                }]}
            />
            <LayoutMain footer>
                <section className=' bg-glacial-emerald-50 h-full py-8'>
                    <div className='max-w-6xl h-full w-full mx-auto px-5'>
                        <FormLogin />
                    </div>
                </section>
            </LayoutMain>
        </>
    )
}

export default Login

export const getServerSideProps: GetServerSideProps = async ({req, res}) => {
    const session = await getServerSession(req, res, authOptions)

    if(session) return { redirect: { destination: '/', permanent: true } }
    
    return {
        props: {}
    }
}