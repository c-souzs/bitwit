import React, { FormEvent } from "react"

import Button from "components/ui/Button"
import Input from "components/ui/Input"
import { signIn } from "next-auth/react"
import { useRouter } from "next/router"

const FormLogin = () => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [error, setError] = React.useState(false)

    const router = useRouter()

    const handlerLoginAuthor = async (e: FormEvent) => {
        e.preventDefault()

        setError(false)

        const request = await signIn('credentials', {
            redirect: false,
            email, password
        })

        if(request && request.ok) router.push('/')
        else setError(true)
    }

    return (
        <>
            <form className='flex flex-col gap-6'onSubmit={handlerLoginAuthor}>
                <Input label='Email' id='email-login' value={email} changeValue={(newValue: string) => setEmail(newValue)} placeholder='email@gmail.com' type='email' required/>
                <Input label='Senha' id='password-login' value={password} changeValue={(newValue: string) => setPassword(newValue)} placeholder='••••••••' type='password' required/>
                <Button
                    type='submit'
                >
                    <p className='w-full'>Acessar conta</p>
                </Button>
            </form>
            {error && <p className='text-sm text-red-500 font-semibold mt-4'>Erro ao realizar login, verifique os campos.</p>}
        </>
    )
}

export default FormLogin