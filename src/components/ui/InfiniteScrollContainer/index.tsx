import React, { ReactNode } from "react"

import useIntersectionObserver from "hooks/useIntersectionObserver"
import Loader from "../Loader"

type PaginatedViewProps = {
    children: ReactNode
    isLoading: boolean
    isError: boolean
    hasNextPage: boolean | undefined
    onRequestToLoadMore: () => void
}

const InfiniteScrollContainer = ({ children, isLoading, isError, hasNextPage, onRequestToLoadMore }: PaginatedViewProps) => {
    // Scroll infinito baseado na visibilidade de um elemento div puro
    const scrollRef = React.useRef<HTMLDivElement>(null);
    const intersectionObserver = useIntersectionObserver(scrollRef, {
        root: null,
        rootMargin: '50px',
        threshold: 0,
    });
    React.useEffect(() => {
        const shouldLoadNextPage = intersectionObserver?.isIntersecting && !isLoading && !isError && hasNextPage 

        if(shouldLoadNextPage) onRequestToLoadMore()

    }, [intersectionObserver?.isIntersecting, onRequestToLoadMore, isLoading])

    return (
        <>
            { children }
            <div ref={scrollRef} key='scrollRef'/>
            {
                (!hasNextPage || isLoading) && (
                    <div className='flex justify-center pt-10 pb-4'>
                        {!hasNextPage && <p className='font-semibold text-emerald-600'>Todos os posts já foram carregados 😴</p>}
                        {isError && <p className='font-semibold text-emerald-600'>Erro ao buscar posts 😞</p>}
                        {(isLoading) && <Loader />}
                    </div>
                )
            }
        </>
    )
}

export default InfiniteScrollContainer