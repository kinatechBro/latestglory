import { createContext, useContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
const userContext = createContext();

function UserProviderContext({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   auth.onAuthStateChanged((authUser) => {
  //     if (authUser) {
  //       setUser(authUser);
  //     } else setUser(null);
  //   });
  // }, []);

  //User Observer
  useEffect(() => {
    onAuthStateChanged(
      auth,
      (user) => {
        if (user) {
          setUser(user);
          const uid = user.uid;
        } else {
          setUser(null);
        }

        if (isLoading === true) {
          // Only update loading state when it's true
          setIsLoading(false);
        }
      },
      [isLoading]
    );
  });

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
