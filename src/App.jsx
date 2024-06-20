import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Detail from "./Pages/Detail";
import Create from "./Pages/Create";
import AddEditBlog from "./Pages/AddEditBlog";
import About from "./Pages/About";
import NotFound from "./Pages/NotFound";
import Auth from "./Auth/Auth";
import { useEffect, useState } from "react";
import { auth } from "./firebase";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else setUser(null);
    });
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home user={user} setUser={setUser} />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/create" element={<AddEditBlog />} />
        <Route path="/update/:id" element={<AddEditBlog />} />
        <Route path="/about" element={<About />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </div>
  );
}
