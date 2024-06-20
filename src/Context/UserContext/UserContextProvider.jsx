import { useState } from "react";
import userContext from "./UserContext";

function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [signUp, setSignUp] = useState(false);

  return (
    <userContext.Provider value={{ user, setUser, signUp, setSignUp }}>
      {children}
    </userContext.Provider>
  );
}

export default UserContextProvider;
