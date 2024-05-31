import { useEffect, useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(email, password);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("handle login here");

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div>
      <h2></h2>
      <div>
        <form action="">
          <input
            type="text"
            placeholder="Enter Email"
            onChange={(e) => setEmail(() => e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Password"
            onChange={(e) => setPassword(() => e.target.value)}
          />

          <button onClick={handleLogin}>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Auth;
