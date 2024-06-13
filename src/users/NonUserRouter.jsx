import { Route, Routes } from "react-router-dom";
import SinglePost from "../Pages/SinglePost";
import AddNewPost from "../Pages/AddNewPost";
import Home from "../Pages/Home";
function NonUserRouter() {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/new" element={<AddNewPost />} />
        <Route path="/singlepost" element={<SinglePost />} />
      </Routes>
    </div>
  );
}

export default NonUserRouter;
