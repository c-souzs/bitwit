import React from "react";

import PostsList from "components/home/PostsList";
import PaginatedView from "@/components/home/PaginatedView";
import { PaginatedCtx, PaginatedProvider } from "contexts/PaginatedCtx";

type PaginatedProps = {
    titleSearch: string
}

const Paginated = ({ titleSearch }: PaginatedProps) => {
    const { changeTitleSearch, posts } = React.useContext(PaginatedCtx)
    
    React.useEffect(() => {
        changeTitleSearch(titleSearch)
    }, [titleSearch])

    return (
        <PaginatedView>
            <PostsList posts={posts} />
        </PaginatedView>            
    )
}

export default Paginated