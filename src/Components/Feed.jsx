import PostsCard from "./PostsCard";

function Feed({ postsData }) {
  return (
    <>
      <PostsCard postsData={postsData} />
    </>
  );
}

export default Feed;
