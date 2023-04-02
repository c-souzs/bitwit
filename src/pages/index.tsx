import Introduction from "src/components/home/Introduction";
import PostsList from "src/components/home/PostsList";
import SearchPost from "src/components/home/Search";
import LayoutMain from "src/components/layout/Main";

export default function Home() {
  return (
    <LayoutMain>
        <Introduction />
        <SearchPost />
        <PostsList />
    </LayoutMain>
  )
}
