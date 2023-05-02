import React from "react"

import LayoutMain from "components/layout/Main"
import FormLogin from "components/login/Form"
import FormHeader from "components/login/Header"
import FirstTime from "components/login/FirstTime"
import { GetServerSideProps } from "next"
import { getServerSession } from "next-auth"
import { authOptions } from "./api/auth/[...nextauth]"

const Login = () => {
    return (
        <LayoutMain footer>
            <section className=' bg-glacial-emerald-50 h-full py-8'>
                <div className='max-w-6xl h-full w-full mx-auto px-5'>
                    <div className='max-w-sm shadow-div rounded px-10 py-6'>
                            <FormHeader />
                            <FormLogin />
                    </div>
                </div>
                <FirstTime />
            </section>
        </LayoutMain>
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