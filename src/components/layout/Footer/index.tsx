import Logo from "components/ui/Logo"
import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react"
import Link from "next/link"

const Footer = () => {
    const data = new Date()

    return (
        <footer className='bg-glacial-emerald-50 relative before:absolute before:block before:w-full before:h-0.5 before:bg-[#F0F2F2] sm:h-20'>
            <div className='max-w-6xl h-full w-full mx-auto px-5 py-5 flex flex-wrap gap-y-2 gap-x-6 text-center justify-center items-center sm:justify-between sm:py-0'>
                <Logo />
                <p>Copyright © {data.getFullYear()} - Alguns direitos reservados.</p>
                <nav>
                    <ul className='flex items-center gap-6' aria-label='Redes sociais'>
                        <li>
                            <Link href='https://www.linkedin.com/in/souzzs/' target='_blank' className='text-[#828282] transition-colors hover:text-emerald-600' rel='noopener'>
                                <LinkedinLogo size={32} color='currentColor' />
                            </Link>
                        </li>
                        <li>
                            <Link href='https://github.com/souzzs' target='_blank' className='text-[#828282] transition-colors hover:text-emerald-600' rel='noopener'>
                                <GithubLogo size={32} color='currentColor' />
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>

    )
}

export default Footer