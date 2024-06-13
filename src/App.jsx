import userContext from "./Context/UserContext/UserContext";
import { useContext } from "react";
import NonUserRouter from "./users/NonUserRouter";
import UserRouter from "./users/UserRouter";

export default function App() {
  const { isLoggedIn, setIsLoggedIn } = useContext(userContext);

  return <div>{isLoggedIn ? <UserRouter /> : <NonUserRouter />}</div>;
}
