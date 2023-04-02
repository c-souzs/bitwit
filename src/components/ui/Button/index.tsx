import classNames from "classnames";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    small?: boolean
    secondary?: boolean
    children: ReactNode
    onClick?: () => void
}

const Button = ({ children, onClick, small, secondary, type = 'button', ...rest }: IButtonProps) => {
    if(secondary) {
        return (
            <button
                onClick={onClick}
                className={classNames('flex justify-between items-center gap-2 text-emerald-500 font-medium border border-emerald-500 py-2 px-6 rounded-full transition-colors hover:bg-emerald-600 hover:border-emerald-600 hover:text-white',
                {'text-sm': small})}
                role='button'
                type={type}
                {...rest}
            >
                { children }
            </button>
        )
    } else {
        return (
            <button
                onClick={onClick}
                className={classNames('text-white font-medium bg-emerald-500 py-2 px-6 rounded-full flex justify-between items-center gap-2 transition-colors hover:bg-[#017867]',
                {'text-sm': small},)}
                role='button'
                type={type}
                {...rest}
            >
                { children }
            </button>
        )
    }
}

export default Button;