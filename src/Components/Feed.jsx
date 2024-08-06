import PostsCard from "./PostsCard";
import { feed } from "../Data/Data";
import { getData } from "../contexts/DataProviderContex";

function Feed() {
  const { postsData } = getData();
  return (
    <>
      <div className={`${feed.responsive}`}>
        {postsData.map((posts) => (
          <PostsCard postsData={posts} key={posts.id} />
        ))}
      </div>
    </>
  );
}

export default Feed;
