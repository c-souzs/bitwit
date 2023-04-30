import { lazy } from 'react';
import FormRegister from "../Form"

const ParticlesComponent = lazy(() => import('../Particle'));


const SuccessPayment = () => {
    return (
        <>
            <ParticlesComponent />
            <section className=' bg-glacial-emerald-50 h-full py-8 relative'>
                <div className='max-w-6xl h-full w-full mx-auto px-5'>
                    <FormRegister />
                </div>
            </section>
        </>
    )
}

export default SuccessPayment