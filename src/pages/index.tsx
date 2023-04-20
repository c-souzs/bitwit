import React from "react";
import { GetStaticProps } from "next";

import client from "graphql/client";
import { GET_TAGS } from "graphql/queries";
import { GetTagsQuery, Tag } from "graphql/generated/graphql";

import Introduction from "components/home/Introduction";
import LayoutMain from "components/layout/Main";
import SearchPost from "components/home/Search";
import InfiniteScroll from "@/components/home/InfiniteScroll";


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
    const tagsDataAnimation = createTagsDataAnimation(tags);

    return (
        <LayoutMain>
            <Introduction dataAnimation={tagsDataAnimation}/>
            <SearchPost tags={tags.map(({ name }) => name)}/>
            <InfiniteScroll />
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