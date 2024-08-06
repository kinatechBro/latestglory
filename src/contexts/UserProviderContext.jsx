import { createContext, useContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
const userContext = createContext();

function UserProviderContext({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else setUser(null);
    });
  }, []);

  return (
    <div>
      <userContext.Provider value={{ user, setUser, isLoading, setIsLoading }}>
        {children}
      </userContext.Provider>
    </div>
  );
}

export default UserProviderContext;

export function useAuth() {
  return useContext(userContext);
}
