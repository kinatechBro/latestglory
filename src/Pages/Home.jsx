import CategoriesNav from "../Components/CategoriesNav";
import Trending from "../Components/Trending";
import Feed from "../Components/Feed";
import { blog } from "../Data/Data";

function Home() {
  return (
    <>
      <div className={`${blog.parentContainer}`}>
        <CategoriesNav />
        {/* <Trending /> */}
        <br />
        {/* <Feed /> */}
      </div>
    </>
  );
}

export default Home;
