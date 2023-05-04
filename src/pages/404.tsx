import LayoutMain from "@/components/layout/Main"

const Custom404 = () => {
    return (
        <LayoutMain footer>
            <div className='max-w-6xl h-full w-full mx-auto px-5 flex flex-col items-center gap-4'>
                <p className='text-lg'>Serviço ou rota não encontrado 🤷‍♂️</p>
            </div>
        </LayoutMain>
    )
}

export default Custom404