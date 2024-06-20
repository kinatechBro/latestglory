import Nav from "../Components/Nav";
import Blog from "../Components/Blog";
import UserRouter from "../users/UserRouter";

export default function Home({ user, setUser }) {
  const userId = user?.uid;
  console.log(userId);
  console.log("name", user?.displayName);
  return (
    <>
      <Nav user={userId} />
      <Blog />
    </>
  );
}
