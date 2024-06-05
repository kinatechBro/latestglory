import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./Auth/Auth";
import AddNewPost from "./Pages/AddNewPost";
import SinglePost from "./Pages/SinglePost";
import Home from "./Pages/Home";
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/new" element={<AddNewPost />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/singlePost" element={<SinglePost />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}
