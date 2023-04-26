import React, { ReactNode } from "react"

import Loader from "../Loader"
import Button from "../Button"

type PaginatedViewProps = {
    children: ReactNode
    isLoading: boolean
    isError: boolean
    hasNextPage: boolean | undefined
    onRequestToLoadMore: () => void
}

const InfiniteScrollContainer = ({ children, isLoading, isError, hasNextPage, onRequestToLoadMore }: PaginatedViewProps) => {

    return (
        <>
            { children }
            <div className='flex justify-center pt-10 pb-4'>
                {
                    (hasNextPage && !isLoading) && <Button onClick={() => onRequestToLoadMore()} secondary> Carregar mais </Button>
                }
                {
                    !hasNextPage && <p className='text-sm font-semibold text-emerald-500'>Todos os posts foram listados</p>
                }
                {
                    isLoading && <Loader />
                }
                {
                    isError && <p className='text-sm font-semibold text-red-500'>Erro ao listar posts</p>
                }
            </div>
        </>
    )
}

export default InfiniteScrollContainer