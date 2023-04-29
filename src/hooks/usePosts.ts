import React from "react"
import { useInfiniteQuery } from "react-query"
import { fetchPostsByPage } from "service/customFetcher"
import { usePaginatedResultItems } from "./usePaginatedResultItems"
import { AxiosError } from "axios"

const usePosts = () => {
    const [title, setTitle] = React.useState('')

    const { 
        data, 
        isLoading, 
        fetchNextPage, 
        hasNextPage, 
        isFetchingNextPage } = useInfiniteQuery(
        ['posts', title],
        ({pageParam = 1}) => fetchPostsByPage(pageParam, title),
        {

            getNextPageParam: (lastPage, allPages) => {
                const { data } = lastPage
                if(data.length < 2) return undefined

                return lastPage.data.length ? allPages.length + 1 : null
            },
        }
    )
    const isLoadingPosts = isLoading || isFetchingNextPage

    const posts = usePaginatedResultItems(data, (response) => response.data)
    
    return {
        setTitle,
        posts, 
        isLoadingPosts,
        fetchNextPage,
        hasNextPage, 
    }
}

export default usePosts