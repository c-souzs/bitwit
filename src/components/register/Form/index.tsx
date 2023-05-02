import React, { FormEvent } from "react"

import { roboto } from "pages/_app"

import classNames from "classnames"
import Cookies from "js-cookie"

import useConfirmPassword from "hooks/useConfirmPassword"

import Button from "components/ui/Button"
import Input from "components/ui/Input"
import { api } from "service/axios"
import { useMutation } from "react-query"
import { signIn } from "next-auth/react"
import client from "graphql/client"
import { MUTATION_DELETE_PAYMENT } from "graphql/queries"
import { DeletePaymentMutation } from "graphql/generated/graphql"

type ReponseAuthor = {
    email: string
    password: string
}

type PostAuthor = {
    name: string
    email: string
    password: string
}

const postAuthor = async ({ email, name, password }: PostAuthor) => {
    const { data  } = await api.post<ReponseAuthor, any>('/author', { name, email, password })
    const { email: emailAuthor, password: passwordAuthor } = data

    return {
        email: emailAuthor,
        password: passwordAuthor
    }
}

const FormRegister = () => {
    const [email, setEmail] = React.useState('')
    const [name, setName] = React.useState('')
    const [password, setPassword] = React.useState('')

    const { confirmPassword, changeConfirmPassword, confirm } = useConfirmPassword(password)

    const { data, isLoading, mutate: createAuthor } = useMutation(
        postAuthor, {
            onSuccess: async () => {
                const idTransaction = Cookies.get('idTransaction')

                await client.request<DeletePaymentMutation>(MUTATION_DELETE_PAYMENT, { idTransaction })
                
                Cookies.remove('idTransaction')

            }
        })

    const handlerRegister = async (e: FormEvent) => {
        e.preventDefault()

        createAuthor({
            email, name, password
        })
    }

    React.useEffect(() => {
        const callLogin = async () => {
            if(data) {
                await signIn('credentials', {
                    email, password
                })
            }
        }
        callLogin()
    }, [data])

    return (
        <>
            <div className='shadow-div rounded px-10 py-6'>
                <h2 className='text-emerald-500 text-2xl flex items-center gap-2 mb-2 before:block before:w-4 before:h-[3px] before:bg-emerald-600 before:rounded'>Preencha seus dados</h2>
                <p className={classNames('mb-8', roboto.className)}>Você está a um passo de acessar o melhor conteúdo sobre javascript.</p>
                <form className='flex flex-col gap-6' onSubmit={handlerRegister}>
                    <div className='flex gap-6'>
                        <Input label='Nome' id='name-login' value={name} changeValue={(newValue: string) => setName(newValue)} placeholder='Caio Souza' required/>
                        <Input label='Senha' id='password-login' value={password} changeValue={(newValue: string) => setPassword(newValue)} placeholder='••••••••' type='password' required/>
                    </div>
                    <Input label='Email' id='email-login' value={email} changeValue={(newValue: string) => setEmail(newValue)} placeholder='caiosouza@gmail.com' type='email' required/>
                    {
                        !!password.length && (
                            <Input label='Confirmar senha' id='password-confirm-login' value={confirmPassword} changeValue={(newValue: string) => changeConfirmPassword(newValue)} placeholder='••••••••' type='password' required/>
                        )
                    }
                    <Button
                        type='submit'
                        disabled={isLoading}
                    >
                        <p className='w-full'>{isLoading ? 'Carregando....': 'Criar conta'}</p>
                    </Button>
                </form>
                {
                    !!password.length && (<p className='text-sm text-red-500 font-semibold mt-4'>{(!confirm && !!confirmPassword.length) && 'As senhas não coincidem.'}</p>)
                }
            </div>
        </>
    )
}

export default FormRegister