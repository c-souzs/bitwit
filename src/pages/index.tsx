import React from "react"

import { GetStaticProps } from "next"
import { useRouter } from "next/router"

import { NextSeo } from 'next-seo'
import Cookies from "js-cookie"

import client from "graphql/client"
import { GET_TAGS } from "graphql/queries"
import { GetTagsQuery, Tag } from "graphql/generated/graphql"

import { PaginatedProvider } from "contexts/PaginatedCtx"
import Introduction from "components/home/Introduction"
import LayoutMain from "components/layout/Main"
import SearchPost from "components/home/Search"
import Paginated from "components/home/Paginated"
import useSessionAuthor from "hooks/useSessionAuthor"

type HomeProps = {
    tags: Tag[]
}

function createTagsDataAnimation(tags: Tag[]): string[] {
    const tagsName = tags.map(({ name }) => name)
    const tagsDataAnimation: string[] = []
    
    for (let i = 0; i < tagsName.length; i += 5) tagsDataAnimation.push(tagsName.slice(i, i + 5).join(", "))

    return tagsDataAnimation
}

export default function Home({ tags }: HomeProps) {
    // Estruturação dos dados para a animação
    const tagsDataAnimation = createTagsDataAnimation(tags)

    
    // Valor do campo de busca
    const [titleSearch, setTitleSearch] = React.useState('')
    const changeTitleSearch = (title: string) => setTitleSearch(title)

    const router = useRouter()

    React.useEffect(() => {
        const cookieTransaction = Cookies.get('idTransaction')

        if(cookieTransaction) router.push('/register')
    }, [])  

    const { session } = useSessionAuthor()

    return (
        <>
            <NextSeo 
                title='Bitwit | Os melhores conteúdos de javascript'
                description='Bitwit, o blog de tecnologias JavaScript oferece códigos, dicas e tutoriais abrangentes e atualizados sobre o universo da programação front-end e back-end. Com uma abordagem prática e acessível, nossos posts ajudam desenvolvedores e entusiastas a aprimorar suas habilidades e ficar por dentro das últimas tendências e novidades em JavaScript. Em nossa página inicial, você pode encontrar facilmente o conteúdo que procura, graças a nossa barra de pesquisa e lista de posts. Além disso, temos uma área de inscrição para que você possa receber conteúdo exclusivo e se manter atualizado. Junte-se a nossa comunidade de desenvolvedores e leve suas habilidades em JavaScript para o próximo nível!'
                canonical='https://bitwit-souzzs.vercel.app'
                openGraph={{
                    url: 'https://bitwit-souzzs.vercel.app',
                    title: 'Bitwit | Os melhores conteúdos de javascript',
                    images: [{
                        url: '/banner-site.PNG',
                        width: 1280,
                        height: 720,
                        alt: 'Bitwit banner'
                    }],
                    siteName: 'Bitwit'
                }}
                additionalMetaTags={[{
                    name: 'keywords',
                    content: 'blog, programação, javascript, typescript, bitwit, tecnologia, front-end, back-end, node'
                }]}
            />
            <LayoutMain>
                <Introduction dataAnimation={tagsDataAnimation}/>
                {
                    (session && session.user) && (
                        <SearchPost 
                            changeTitleSearch={changeTitleSearch}
                        />
                    )
                }
                <PaginatedProvider>
                    <Paginated 
                        titleSearch={titleSearch}
                    />
                </PaginatedProvider>
            </LayoutMain>
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {

    const { tags } = await client.request<GetTagsQuery>(GET_TAGS)
    
    return {
        props: {
            tags
        }
    }
}