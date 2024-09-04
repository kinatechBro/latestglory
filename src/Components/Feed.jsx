import PostsCard from "./PostsCard";
import { feed } from "../Data/Data";
import { getData } from "../contexts/DataProviderContex";

function Feed() {
  const { postData } = getData();
  return (
    <>
      <div className={`${feed.responsive}`}>
        {postData.map((posts) => (
          <PostsCard postsData={posts} key={posts.id} />
        ))}
      </div>
    </>
  );
}

export default Feed;
