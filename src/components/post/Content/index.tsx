import classNames from "classnames"

import { Asset, Maybe, RichText } from "graphql/generated/graphql"
import { roboto } from "pages/_app"

type ContentPostProps = {
    coverImage: Maybe<Asset> | undefined
    title: string
    content: RichText
}

const ContentPost = ({ coverImage, content, title }: ContentPostProps) => {
    const { html } = content
    
    //  Encontra a posição do início da primeira tag <p>
    const indexStartP =  html.indexOf('<p>')
    // Encontra a posição do fim da primeira tag </p> - adicionado o 4 para pegar o fechamento da tag </p> que tem 4 caracter
    const indexEndP = html.indexOf('</p>', indexStartP) + 4

    // Extrai o conteudo
    const startHTML = html.substring(indexStartP, indexEndP)
    const endHTML = html.substring(indexEndP)

    return (
        <>
            <div className='grid grid-cols-1 gap-8 md:grid-cols-post'>
                <figure>
                    <img src={coverImage?.url} alt={title} className='w-full h-full rounded object-cover'/>
                </figure>
                <div dangerouslySetInnerHTML={{__html: startHTML}}/>
            </div>
            <div 
                dangerouslySetInnerHTML={{__html: endHTML}}
                className={classNames('flex flex-col gap-8 mt-8', roboto.className)} />
        </>
    )
}

export default ContentPost