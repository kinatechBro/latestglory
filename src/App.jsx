import Auth from "./Auth/Auth";
import AddNewPost from "./Pages/AddNewPost";
import Home from "./Pages/Home";
import NonUserRouter from "./users/NonUserRouter";
export default function App() {
  return (
    <div>
      <Home />
      <AddNewPost />
      <Auth />
      <NonUserRouter />
    </div>
  );
}
