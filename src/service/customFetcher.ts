import { PostCardData } from "types"
import { api } from "./axios"

// Busca e retorna os posts
export const fetchPostsByPage = async (currentPage: number, title: string) => {
    const response = await api.get<{posts: PostCardData[]}>(`posts?currentPage=${currentPage}&title=${title}`)
    const { data: { posts } } = response
    
    return {
        data: posts
    } 
}