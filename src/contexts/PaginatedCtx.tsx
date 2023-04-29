import usePosts from "hooks/usePosts";
import React, { ReactNode } from "react";
import { PostCardData } from "types";

type PaginatedProviderProps = {
    children: ReactNode;
}

type PaginatedCtxType = {
    hasNextPage: boolean | undefined
    posts: PostCardData[]
    isLoading: boolean
    isData: number
    changeTitleSearch: (value: string) => void
    onRequestToLoadMore: () => void
}

const initalValue: PaginatedCtxType = {
    hasNextPage: undefined,
    isLoading: false,
    posts: [],
    isData: 0,
    changeTitleSearch: () => {},
    onRequestToLoadMore: () => {}
}

export const PaginatedCtx = React.createContext<PaginatedCtxType>(initalValue)

export const PaginatedProvider = ({ children }: PaginatedProviderProps) => {
    const { fetchNextPage, hasNextPage, isLoadingPosts, posts, setTitle } = usePosts()
    
    const onRequestToLoadMore = () => fetchNextPage()
    const isData = posts.length
    const isLoading = isLoadingPosts
    const changeTitleSearch = (Value: string) => setTitle(Value)

    return(
        <PaginatedCtx.Provider value={{hasNextPage, isData, isLoading, posts, onRequestToLoadMore, changeTitleSearch}}>
            { children }
        </PaginatedCtx.Provider>
    )
}