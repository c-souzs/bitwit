import { inter } from "pages/_app"
import classNames from "classnames"
import { ReactNode } from "react"
import Header from "../Header"

type LayoutMainProps = {
    children: ReactNode
}

const LayoutMain = ({ children }: LayoutMainProps) => {
    return (
        <>  
            <Header />
            <main className={classNames('bg-glacial-emerald-50 pb-14', inter.className)}>
                {children}
            </main>
        </>
    )
}

export default LayoutMain