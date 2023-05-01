import React, { FormEvent } from "react"

import { roboto } from "pages/_app"

import classNames from "classnames"
import Cookies from "js-cookie"

import useConfirmPassword from "hooks/useConfirmPassword"

import Button from "components/ui/Button"
import Input from "components/ui/Input"

const FormRegister = () => {
    const [email, setEmail] = React.useState('')
    const [name, setName] = React.useState('')
    const [password, setPassword] = React.useState('')

    const { confirmPassword, changeConfirmPassword, confirm } = useConfirmPassword(password)

    const handlerRegister = (e: FormEvent) => {
        e.preventDefault()

        // Após criar o usuário o cookie com a id da transação é removido
        // Ele também deve, ou ainda vai, deletar o status da transação na CMS
        Cookies.remove('idTransaction')
    }

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
                    <Button>
                        <p className='w-full'>Criar conta</p>
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