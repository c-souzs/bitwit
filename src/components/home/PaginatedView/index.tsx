import React, { ReactNode } from "react"

import Loader from "../../ui/Loader"
import Button from "../../ui/Button"
import { PaginatedCtx } from "contexts/PaginatedCtx"

type PaginatedViewProps = {
    children: ReactNode
}

const PaginatedView = ({ children }: PaginatedViewProps) => {
    const { hasNextPage, isLoading, isData,  onRequestToLoadMore } = React.useContext(PaginatedCtx)

    return (
        <div className='pb-14'>
            { children }
            <div className='flex justify-center pt-10 pb-4'>
                {
                    (hasNextPage && !isLoading) && <Button onClick={() => onRequestToLoadMore()} secondary> Carregar mais </Button>
                }
                {
                    (!hasNextPage && !!isData) && <p className='text-sm font-semibold text-emerald-500'>Todos os posts foram listados</p>
                }
                {
                    (!isLoading && !isData) && <p className='text-sm font-semibold text-red-500' data-testid='empty-search'>Sua busca não deu resutados</p>
                }
                {
                    isLoading && <Loader />
                }
            </div>
        </div>
    )
}

export default PaginatedView