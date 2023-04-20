import React from "react";
import { useInfiniteQuery } from "react-query";

import { api } from "service/axios";
import { usePaginatedResultItems } from "hooks/usePaginatedResultItems";

import PostsList from "../PostsList";
import { PostCardData } from "types";
import InfiniteScrollContainer from "components/ui/InfiniteScrollContainer";

// Busca e retorna os posts
const fetchPostsByPage = async (currentPage: number) => {
    const response = await api.get<{posts: PostCardData[]}>(`posts?currentPage=${currentPage}`)
    const { data: { posts } } = response

    return {
        data: posts
    }
}

const InfiniteScroll = () => {
    // Configuração do useInfiniteQuery
    const { 
        data, 
        isLoading, 
        isError,
        fetchNextPage, 
        hasNextPage, 
        isFetchingNextPage } = useInfiniteQuery(
        ['posts'],
        ({pageParam = 1}) => fetchPostsByPage(pageParam),
        {
            refetchOnMount: true,
            keepPreviousData: false,
            getNextPageParam: (lastPage, allPages) => {
                return lastPage.data.length ? allPages.length + 1 : null
            }
        }
    )
    const isLoadingData = isLoading || isFetchingNextPage

    // Manipulação dos dados de data para evitar map em map
    const posts = usePaginatedResultItems(data, (response) => response.data)

    return (
        <InfiniteScrollContainer
            hasNextPage={hasNextPage}
            isLoading={isLoadingData}
            isError={isError}
            onRequestToLoadMore={() => fetchNextPage()}
        >
            <PostsList posts={posts} />
        </InfiniteScrollContainer>            
    )
}

export default InfiniteScroll