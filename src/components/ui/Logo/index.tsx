import Link from "next/link";

const Logo = () => (
    <Link 
        href='/' 
        aria-label='Vai para a página inicial do blog.'
        title='Volte para a página inicial.'
        className='uppercase text-3xl font-semibold text-emerald-500
            sm:text-4xl'>
        BitWit
    </Link>
)

export default Logo;