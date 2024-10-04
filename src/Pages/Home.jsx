import { blog } from "../Data/Data";
import Footer from "./Footer";
import Post from "./Post";

function Home() {
  return (
    <>
      <div className={`${blog.container}`}>
        <Post />
      </div>
    </>
  );
}

export default Home;
