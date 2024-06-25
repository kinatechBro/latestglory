import CategoriesNav from "./CategoriesNav";
import Trending from "./Trending";
import Feed from "../Components/Feed";
import { blog } from "../Data/Data";

function Blog() {
  return (
    <>
      <div className={`${blog.parentContainer}`}>
        <CategoriesNav />
        <Trending />
        <Feed />

        <div>
          <h1>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consectetur corporis corrupti nam obcaecati tempora aperiam deleniti
            modi in eveniet, non repudiandae laborum numquam exercitationem?
            Consequatur vel beatae quos saepe optio!
          </h1>
        </div>
      </div>
    </>
  );
}

export default Blog;
