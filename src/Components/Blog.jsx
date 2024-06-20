import CategoriesNav from "./CategoriesNav";
import Trending from "./Trending"
import Feed from "../Components/Feed";
import { blog } from "../Data/Data"

function Blog() {
  return (
    <>
      <div className={`${blog.parentContainer}`}>
        <CategoriesNav />
        <Trending />
        <Feed />
      </div>
    </>
  );
}

export default Blog; 