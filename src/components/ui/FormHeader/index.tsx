import classNames from "classnames"
import { roboto } from "pages/_app"

const FormHeader = () => {
    return (
        <div className='mb-6'>
            <h2 className='text-emerald-500 text-2xl flex items-center gap-2 mb-2 before:block before:w-4 before:h-[3px] before:bg-emerald-600 before:rounded'>Faça seu login</h2>
            <p className={classNames(roboto.className)}>Você está a um passo de acessar o melhor conteúdo sobre javascript 🤖 👍</p>
        </div>
    )
}

export default FormHeader