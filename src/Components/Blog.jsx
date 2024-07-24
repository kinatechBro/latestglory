import CategoriesNav from "./CategoriesNav";
import Trending from "./Trending";
import Feed from "../Components/Feed";
import { blog } from "../Data/Data";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

function Blog() {
  const [postData, setPostData] = useState([]);


  const fetchPostsData = async () => {
    let data = [];
    try {
      const querySnapshot = await getDocs(collection(db, "posts"));
      querySnapshot.forEach((doc) => {
        // console.log(`${doc.id} => ${doc.data()}`);
        data.push({ id: doc.id, ...doc.data() });

        setPostData(data);
        console.log(data)
      });
    } catch (error) {
      console.log(error);
    }
  };

  console.log(postData)

  useEffect(() => {
    fetchPostsData();
  }, []);

  console.log(postData)
  return (
    <>
      <div className={`${blog.parentContainer}`}>
        <CategoriesNav />
        <Trending postsData={postData} />
        <Feed postsData={postData} />
      </div>
    </>
  );
}

export default Blog;