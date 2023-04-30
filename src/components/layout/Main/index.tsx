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
            <main className={classNames(
                'bg-glacial-emerald-50 flex flex-col items-center justify-center', 
                {'min-h-[calc(100vh-80px)]': !footer},
                {'min-h-[calc(100vh-160px)]': footer},
                inter.className)}>
                {children}
            </main>
            {footer && <Footer />}
        </>
    )
}

export default LayoutMain