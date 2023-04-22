import Link from "next/link"
import { AnchorHTMLAttributes, ReactNode } from "react"

interface LinkWrapperProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string
    children: ReactNode
}

const LinkWrapper = ({ href, children, ...rest }: LinkWrapperProps) => {
    return (
        <Link
            href={href}
            className='w-fit text-white font-medium bg-emerald-500 py-2 px-6 rounded-full flex justify-between items-center gap-2 transition-colors hover:bg-[#017867]'
            {...rest}
        >
            {children}
        </Link>
    )
}

export default LinkWrapper