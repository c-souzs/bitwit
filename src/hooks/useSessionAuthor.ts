import { useSession } from "next-auth/react"

const useSessionAuthor = () => {
    const { data, status, update } = useSession()

    return {
        session: data,
        status, update
    }
}

export default useSessionAuthor