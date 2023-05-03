import classNames from "classnames"
import { roboto } from "pages/_app"

import { PostCardData } from "types"
import LinkWrapper from "@/components/ui/Link"
import PaymentButton from "../PaymentButton"
import useSessionAuthor from "hooks/useSessionAuthor"

const ArrowLeft = () => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" color="#FFF" height="16" width="16" aria-label="Ícone de seta para a direita, indicando que vai para outra página." xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
)

const Lock = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24" fill="#FFF" aria-label="Ícone de cadeado, indicando que o post está bloqueado.">
        <path d="M220 422h390v-96q0-54.167-37.882-92.083-37.883-37.917-92-37.917Q426 196 388 233.917 350 271.833 350 326h-60q0-79 55.606-134.5t134.5-55.5Q559 136 614.5 191.575T670 326v96h70q24.75 0 42.375 17.625T800 482v434q0 24.75-17.625 42.375T740 976H220q-24.75 0-42.375-17.625T160 916V482q0-24.75 17.625-42.375T220 422Zm0 494h520V482H220v434Zm260.168-140Q512 776 534.5 753.969T557 701q0-30-22.668-54.5t-54.5-24.5Q448 622 425.5 646.5t-22.5 55q0 30.5 22.668 52.5t54.5 22ZM220 916V482v434Z" />
    </svg>
)

type PostProps = {
    data: PostCardData
}

const PostCard = ({ data }: PostProps) => {
    const { coverImage, title, tags, excerpt, slug, free } = data
    
    const { session } = useSessionAuthor()

    const asBlur = (session && session.user) ? false : !free

    return (
        <div 
            className={classNames('rounded overflow-hidden shadow-div relative group')}
            role='listitem'
            data-testid='post-card-item'>
            {
                asBlur && (
                    <div className='absolute top-0 left-0 right-0 bottom-0 z-10 justify-center items-center hidden group-hover:flex'>
                        <PaymentButton
                            aria-label='Clique aqui para acessar a página de planos e desbloquear o conteúdo do post.'
                        >
                            Desbloquear
                            <Lock />   
                        </PaymentButton>
                    </div>
                )
            }
            <div className={classNames('h-full flex flex-col justify-between', {'blur-[2px]': asBlur})}>
                <div>
                    <figure>
                        <img 
                            src={coverImage?.url ? coverImage.url : '/sample-post-demo.png'} 
                            alt={coverImage?.url ? title : 'Imagem de demonstração de banner do post'}  
                            aria-label={coverImage?.url ? title : 'Imagem de demonstração de banner do post'}
                            className='w-full block object-cover'/>
                    </figure>
                    <div className='p-3'>
                        <h3 className='flex items-center gap-2 text-emerald-500 text-xl font-medium mb-3 before:block before:w-4 before:h-[3px] before:bg-emerald-600 before:rounded'>{ title }</h3>
                        {
                            <div className='flex flex-wrap gap-4 mb-3'>
                                {
                                    tags.map(({ name }) => <span key={`tag-${name}`} className='text-xs uppercase text-emerald-500 border border-emerald-500 rounded-full px-3 py-1'>{name}</span>)
                                }
                            </div>
                        }
                        <p className={`${roboto.className} mb-5`}>{ excerpt }</p>
                    </div>
                </div>
                {!false && (
                        <div className='p-3'>
                            <LinkWrapper 
                                href={`/post/${slug}`}
                                aria-label='Vai para a página de leitura do post.' >
                                    Acessar 
                                    <ArrowLeft />
                            </LinkWrapper>
                        </div>
                    )}
            </div>
        </div>
    )
}

export default PostCard