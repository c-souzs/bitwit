import PostCard from "components/shared/PostCard";
import React from "react";

const PostsList = () => {
    return (
        <article
            aria-label='Lista de posts do blog.'
        >
            <div 
                className='grid grid-cols-1 gap-12 px-5
                    sm:grid-cols-2 sm:px-8 lg:grid-cols-3 lg:px-12'
                role='list'>
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard blur/>
                <PostCard blur/>
                <PostCard blur/>
                <PostCard blur/>
            </div>
        </article>
    )
}

export default PostsList;