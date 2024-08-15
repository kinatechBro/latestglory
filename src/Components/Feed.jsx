import PostsCard from "./PostsCard";
import { feed } from "../Data/Data";
import { getData } from "../contexts/DataProviderContex";

function Feed() {
  const { postData } = getData();
  return (
    <>
      <div
        className={`${feed.responsiv} grid gap-8 md:grid-cols-2 lg:grid-cols-3`}
      >
        {postData.map((posts) => (
          <PostsCard postsData={posts} key={posts.id} />
        ))}
      </div>
    </>
  );
} 

export default Feed;