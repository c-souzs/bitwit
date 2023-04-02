import classNames from "classnames"
import { HTMLAttributes, ReactNode } from "react"

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode
    type: 'block' | 'flex' | 'flex-between' | 'flex-center'
}

const Container = ({ children, type, ...rest }: ContainerProps) => {
    return (
        <div className={classNames('max-w-6xl h-full w-full mx-auto px-5', 
            {'flex items-center': type === 'flex' || type === 'flex-between' || type === 'flex-center'},
            {'justify-between': type === 'flex-between'},
            {'justify-center': type === 'flex-center'},
            {'block': type === 'block'})}
            {...rest} >
            { children }
        </div>
    )
}

export default Container