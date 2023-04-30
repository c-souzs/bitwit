import React from "react"

const useConfirmPassword = (password: string) => {
    const [confirmPassword, setConfirmPassword] = React.useState('')
    const [confirm, setConfirm] = React.useState<null | boolean>(null)

    const changeConfirmPassword = (value: string) => setConfirmPassword(value)

    React.useEffect(() => {
        if (password && confirmPassword) setConfirm(password === confirmPassword)

        if(password === '') setConfirmPassword('')
    }, [password, confirmPassword])

    return {
        confirmPassword, changeConfirmPassword, confirm
    }
}

export default useConfirmPassword