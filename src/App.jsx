import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./Auth/Auth";
import AddNewPost from "./Pages/AddNewPost";
import SinglePost from "./Pages/SinglePost";
import Home from "./Pages/Home";
import Feed from "./Components/Feed";
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/new" element={<AddNewPost />} />
          <Route path="/singlepost" element={<SinglePost />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}
