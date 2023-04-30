import Button from "@/components/ui/Button"
import Input from "@/components/ui/Input"
import classNames from "classnames"
import useConfirmPassword from "hooks/useConfirmPassword"
import { roboto } from "pages/_app"
import React from "react"

const FormRegister = () => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    const { confirmPassword, changeConfirmPassword, confirm } = useConfirmPassword(password)

    return (
        <div className='max-w-sm shadow-div rounded px-10 py-6'>
            <h2 className='text-emerald-500 text-2xl flex items-center gap-2 mb-2 before:block before:w-4 before:h-[3px] before:bg-emerald-600 before:rounded'>Preencha seus dados</h2>
            <p className={classNames('mb-8 text-yellow-500', roboto.className)}>Você está a um passo de acessar o melhor conteúdo sobre javascript.</p>
            <form className='flex flex-col gap-6'>
                <Input label='Email' id='email-login' value={email} changeValue={(newValue: string) => setEmail(newValue)} placeholder='email@gmail.com' type='email' required/>
                <Input label='Senha' id='password-login' value={password} changeValue={(newValue: string) => setPassword(newValue)} placeholder='••••••••' type='password' required/>
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
    )
}

export default FormRegister