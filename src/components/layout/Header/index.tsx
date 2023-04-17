import { SignIn } from "@phosphor-icons/react";
import Link from "next/link";
import Logo from "../../ui/Logo";
import Container from "components/ui/Container";
import classNames from "classnames";
import { inter } from "pages/_app";

const Header = () => {
    return(
        <header
            className={classNames('h-20 bg-glacial-emerald-50 relative after:absolute after:block after:w-full after:h-0.5 after:bg-[#F0F2F2]', inter.className)}
        >
            <Container
                type='flex-between'
            >
                <Logo />
                <Link 
                    href='/login'
                    aria-label='Vai para a página de login.'
                    title='Faça o login.'
                    className='relative after:absolute after:flex after:w-0 after:h-0.5 after:bg-emerald-600 after:rounded after:mt-1 after:transition-all after:hover:w-full'
                >
                    <span className='flex items-center justify-between gap-2'>
                        Login
                        <SignIn color='#000' size={20}/>
                    </span>
                </Link>
            </Container>
        </header>
    )
}

export default Header;