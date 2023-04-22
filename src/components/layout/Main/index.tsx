import { inter } from "pages/_app"
import classNames from "classnames"
import { ReactNode } from "react"
import Header from "../Header"
import Footer from "../Footer"

type LayoutMainProps = {
    children: ReactNode
    footer?: boolean
}

const LayoutMain = ({ children, footer }: LayoutMainProps) => {
    return (
        <>  
            <Header />
            <main className={classNames('bg-glacial-emerald-50 pb-14', inter.className, {'min-h-[calc(100vh-216px)]': footer}, {'min-h-[calc(100vh-80px)]': !footer})}>
                {children}
            </main>
            {footer && <Footer />}
        </>
    )
}

export default LayoutMain