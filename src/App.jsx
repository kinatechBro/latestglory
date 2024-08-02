import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Detail from "./Pages/Detail";
import AddEditBlog from "./Pages/AddEditBlog";
import About from "./Pages/About";
import NotFound from "./Pages/NotFound";
import Auth from "./Auth/Auth";
import { useEffect, useState } from "react";
import { auth } from "./firebase";
import SinglePost from "./Pages/SinglePost";
import Nav from "./Components/Nav";
import PostsCard from "./Components/PostsCard";
import pix_one from "./assets/laptop.jpg";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else setUser(null);
    });
  }, []);

  const postsData = [
    {
      id: 1,
      text: "How To Create React Elements with JSX ",
      img: pix_one,
    },
  ];

  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home user={user} setUser={setUser} />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/create" element={<AddEditBlog />} />
        <Route path="/update/:id" element={<AddEditBlog />} />
        <Route path="/about" element={<About />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path="/singleposts" element={<SinglePost />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/card" element={<PostsCard postsData={postsData} />} />
      </Routes>
    </div>
  );
}
