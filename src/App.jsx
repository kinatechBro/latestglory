import { Route, Routes } from "react-router-dom";
import Detail from "./Pages/Detail";
import AddEditBlog from "./Pages/AddEditBlog";
import About from "./Pages/About";
import NotFound from "./Pages/NotFound";
import Auth from "./Auth/Auth";
import { useEffect, useState } from "react";
import { auth } from "./firebase";
import SinglePost from "./Pages/SinglePost";
import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../src/firebase";

export default function App() {
  const [user, setUser] = useState(null);
  console.log(user)
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else setUser(null);
    });
  }, []);


  const fetchPostsData = async () => {
    let data = [];
    try {
      const querySnapshot = await getDocs(collection(db, "posts"));
      querySnapshot.forEach((doc) => {
        // console.log(`${doc.id} => ${doc.data()}`);
        data.push({ id: doc.id, ...doc.data() });

        setPostData(data);
        // console.log(data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPostsData();
  }, []);


  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home postData={postData} user={user} />} />
        <Route path="/home" element={<Home postData={postData} />} />

        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/create" element={<AddEditBlog />} />
        <Route
          path="/update/:id"
          element={user ? <AddEditBlog /> : <Home postData={postData} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path="/singleposts/:id" element={<SinglePost />} />
        <Route
          path="/auth"
          element={<Auth /> }
        />
      </Routes>
    </div>
  );
}
