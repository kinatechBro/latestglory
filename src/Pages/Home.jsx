import CategoriesNav from "../Components/CategoriesNav";
import Trending from "../Components/Trending";
import Feed from "../Components/Feed";
import { blog } from "../Data/Data";

function Home() {
  return (
    <>
      <div className={`${blog.container}`}>
        <CategoriesNav />
        <Trending />
        <Feed />
      </div>
    </>
  );
}

export default Home;
