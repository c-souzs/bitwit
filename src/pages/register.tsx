import LayoutMain from "@/components/layout/Main"
import React from "react"
import Button from "@/components/ui/Button"

const Register = () => {
    return (
        <>  
            <LayoutMain footer>
                <section className=' bg-glacial-emerald-50 h-full py-8 relative'>
                    <div className='flex flex-col items-center gap-4'>
                        <p className='text-xl text-center'>Lamentamos o erro ao processar o pagamento. <br /> Que tal tentar novamente?</p>
                        <Button>
                            TENTAR NOVAMENTE
                        </Button>
                    </div>
                </section>
            </LayoutMain>
        </>
    )
}

export default Register