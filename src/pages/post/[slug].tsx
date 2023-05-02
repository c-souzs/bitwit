import client from "graphql/client"
import { GetStaticPaths, GetStaticProps } from "next"
import { useRouter } from "next/router"

import { GET_POSTS_SLUG, GET_POST_BY_SLUG } from "graphql/queries"
import { GetPostBySlugQuery, GetPostsSlugQuery, Post as PostType } from "graphql/generated/graphql"

import LayoutMain from "components/layout/Main"
import HeaderPost from "components/post/Header"
import ContentPost from "components/post/Content"
import Loader from "components/ui/Loader"
import { useSession } from "next-auth/react"

type PostProps = {
    post: Pick<PostType, 'coverImage' | 'seo' | 'title' | 'tags' | 'content' | 'author' | 'createdAt' | 'free'>
}

const Post = ({ post }: PostProps) => {
    const router = useRouter()

    const { data: session } = useSession()

    return (
        <LayoutMain footer>
            {
                ((session && session.user) || post?.free ) ? (
                    <article>
                        <div className='max-w-6xl h-full w-full mx-auto px-5'>
                            {
                                router.isFallback && <Loader />
                            }
                            {
                                post && (
                                    <>
                                        <HeaderPost 
                                            title={post.title}
                                            tags={post.tags}
                                            author={post.author}
                                            createdAt={post.createdAt}
                                        />
                                        <ContentPost 
                                            content={post.content}
                                            coverImage={post.coverImage}
                                            title={post.title}
                                        />
                                    </>
                                )
                            }
                        </div>
                    </article>
                ) : (
                    <section>
                        <div className='max-w-6xl h-full w-full mx-auto px-5'>
                            <p className='text-lg text-center'>
                                Você precisa estar autenticado para acessar o <br /> conteudo do post.
                            </p>
                        </div>
                    </section>
                )
            }
        </LayoutMain>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const { posts } = await client.request<GetPostsSlugQuery>(GET_POSTS_SLUG, { first: 5 })

    const paths = posts.map(({ slug }) => ({
        params: { slug }
    }))

    return {
        paths,
        fallback: true
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const { params, } = context

    const { post } = await client.request<GetPostBySlugQuery>(GET_POST_BY_SLUG, { slug: `${params?.slug}` })
    
    if(!post) return { notFound: true }

    return {
        props: {
            post
        }
    }
}

export default Post