import React from "react"

import Button from "components/ui/Button"
import Input from "components/ui/Input"

const FormLogin = () => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    return (
        <form className='flex flex-col gap-6'>
            <Input label='Email' id='email-login' value={email} changeValue={(newValue: string) => setEmail(newValue)} placeholder='email@gmail.com' type='email' required/>
            <Input label='Senha' id='password-login' value={password} changeValue={(newValue: string) => setPassword(newValue)} placeholder='••••••••' type='password' required/>
            <Button>
                <p className='w-full'>Acessar conta</p>
            </Button>
        </form>
    )
}

export default FormLogin