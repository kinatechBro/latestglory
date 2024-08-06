import CategoriesNav from "../Components/CategoriesNav";
import Trending from "../Components/Trending";
import Feed from "../Components/Feed";
import { blog } from "../Data/Data";

function Home({ postData, user }) {
  return (
    <>
      <div className={`${blog.parentContainer}`}>
        <CategoriesNav />
        <Trending postsData={postData} />
        <br />
        <Feed postsData={postData} user={user} />
      </div>
    </>
  );
}

export default Home;
