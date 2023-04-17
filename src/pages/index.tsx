import Introduction from "components/home/Introduction";
import PostsList from "components/home/PostsList";
import SearchPost from "components/home/Search";
import LayoutMain from "components/layout/Main";

export default function Home() {

    return (
        <LayoutMain>
            <Introduction />
            <SearchPost />
            <PostsList />
        </LayoutMain>
    )
}