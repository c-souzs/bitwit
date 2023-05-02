import { SignIn, SignOut } from "@phosphor-icons/react";
import Link from "next/link";
import Logo from "../../ui/Logo";
import classNames from "classnames";
import { inter } from "pages/_app";
import { signIn, signOut, useSession } from "next-auth/react";

const Header = () => {

    const { data: session } = useSession()

    const handleButtonLoginOrLogout = () => {
        if(session && session.user) {
            signOut()
        } else signIn()
    }

    return(
        <header
            className={classNames('h-20 bg-glacial-emerald-50 relative after:absolute after:block after:w-full after:h-0.5 after:bg-[#F0F2F2]', inter.className)}
        >
            <div className='max-w-6xl h-full w-full mx-auto px-5 flex justify-between items-center'>
                <Logo />
                <button
                    className='relative after:absolute after:flex after:w-0 after:h-0.5 after:bg-emerald-600 after:rounded after:mt-1 after:transition-all after:hover:w-full'
                    onClick={() => handleButtonLoginOrLogout()}
                >
                    {(session && session.user) ? (
                        <span className='flex items-center justify-between gap-2'>
                            {session.user.name}
                            <SignOut color='#000' size={20}/>
                        </span>
                    ) : (
                        <span className='flex items-center justify-between gap-2'>
                            Login
                            <SignIn color='#000' size={20}/>
                        </span>
                    )}
                </button>
            </div>
        </header>
    )
}

export default Header;