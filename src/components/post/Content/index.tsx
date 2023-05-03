import React from "react";
import classNames from "classnames"
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css'

import { Asset, Maybe, RichText } from "graphql/generated/graphql"
import { roboto } from "pages/_app"
import Image from "next/image";

type ContentPostProps = {
    coverImage: Maybe<Asset> | undefined
    title: string
    content: RichText
}

const customHTMLContent = (html: string) => {
    //  Encontra a posição do início da primeira tag <p>
    const indexStartP =  html.indexOf('<p>')
    // Encontra a posição do fim da primeira tag </p> - adicionado o 4 para pegar o fechamento da tag </p> que tem 4 caracter
    const indexEndP = html.indexOf('</p>', indexStartP) + 4

    // Extrai o conteudo
    const startHTML = html.substring(indexStartP, indexEndP)
    const endHTML = html.substring(indexEndP)

    // Caso aja alguma tag code, ele adiciona a class da estilização do prism
    const modifiedCodeHTML = endHTML.replace(/<code>/g, '<code class="language-js">')

    // Caso aja a tag pre ele exibie as linhas do código
    const moifiedPreHTML = modifiedCodeHTML.replace(/<pre>/g, '<pre class="line-numbers">')

    // Cajo aja alhum link ele aplica a estilização
    const modifiedLinkHTML = moifiedPreHTML.replace(/<a([^>]+)>/g, '<a$1 class="text-emerald-500 transition-colors hover:text-emerald-600">');

    return {
        startHTML,
        endModifiedHTML: modifiedLinkHTML
    }
}

const ContentPost = ({ coverImage, content, title }: ContentPostProps) => {
    const { html } = content
    const { startHTML, endModifiedHTML } = customHTMLContent(html)

    const [isMount, setIsMount] = React.useState(false)
    const contentRef = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
        setIsMount(true)
    }, [])

    React.useEffect(() => {
        if(typeof window != 'undefined' && contentRef.current){
            Prism.highlightAllUnder(contentRef.current);  
        }
    }, [isMount]);

    return (
        <section className='pb-14'>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-post'>
                <div className='w-full h-full relative rounded overflow-hidden'>
                    <Image 
                        src={coverImage?.url || '/sample-post-demo.png'} 
                        alt={coverImage?.url ? title : 'Imagem de demonstração de banner do post'}
                        aria-label={coverImage?.url ? title : 'Imagem de demonstração de banner do post'}
                        fill
                    />
                </div>
                { isMount && <div dangerouslySetInnerHTML={{__html: startHTML}}/>}
            </div>
            { isMount && 
                <div 
                    ref={contentRef}
                    dangerouslySetInnerHTML={{__html: endModifiedHTML}}
                    className={classNames('flex flex-col gap-4 mt-4', roboto.className)} />
            }
        </section>
    )
}

export default ContentPost