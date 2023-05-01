import React from "react"

import { GetStaticProps } from "next"
import { useRouter } from "next/router"

import Cookies from "js-cookie"

import client from "graphql/client"
import { GET_TAGS } from "graphql/queries"
import { GetTagsQuery, Tag } from "graphql/generated/graphql"

import { PaginatedProvider } from "contexts/PaginatedCtx"
import Introduction from "components/home/Introduction"
import LayoutMain from "components/layout/Main"
import SearchPost from "components/home/Search"
import Paginated from "@/components/home/Paginated"

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

    return (
        <LayoutMain>
            <Introduction dataAnimation={tagsDataAnimation}/>
            <SearchPost 
                changeTitleSearch={changeTitleSearch}
            />
            <PaginatedProvider>
                <Paginated 
                    titleSearch={titleSearch}
                />
            </PaginatedProvider>
        </LayoutMain>
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