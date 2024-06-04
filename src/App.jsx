import Auth from "./Auth/Auth";
import AddNewPost from "./Pages/AddNewPost";
import Home from "./Pages/Home";
export default function App() {
  return (
    <div>
      <Home />
      <AddNewPost />
      <Auth />
    </div>
  );
}
