import { Route, Routes } from "react-router-dom";
import Detail from "./Pages/Detail";
import AddEditBlog from "./Pages/AddEditBlog";
import About from "./Pages/About";
import NotFound from "./Pages/NotFound";
import Auth from "./Auth/Auth";
import SinglePost from "./Pages/SinglePost";
import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import Spinner from "./Components/Spinner";
import { useAuth } from "./contexts/UserProviderContext";

export default function App() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/create" element={<AddEditBlog />} />
        <Route path="/update/:id" element={user ? <AddEditBlog /> : <Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path="/singleposts/:id" element={<SinglePost />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </div>
  );
}
