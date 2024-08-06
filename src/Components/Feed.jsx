import PostsCard from "./PostsCard";
import { feed } from "../Data/Data";

function Feed({ postsData, user}) {
  return (
    <>
      <div className={`${feed.responsive}`}>
        {postsData.map((posts) => (
          <PostsCard postsData={posts} key={posts.id} user={user} />
        ))}
      </div>
    </>
  );
}

export default Feed;
