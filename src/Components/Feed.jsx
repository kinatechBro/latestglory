import PostsCard from "./PostsCard";
import { blogPosts } from "../Data/Data";

function Feed() {
  return (
    <>
      <PostsCard postsData={blogPosts} />
    </>
  );
}

export default Feed;
