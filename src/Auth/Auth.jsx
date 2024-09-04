//auth Import Statement
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useAuth } from "../contexts/UserProviderContext";
import { app } from "../firebase";

import { useState } from "react";
import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";
import { authStyle } from "../Data/Data";
//Component Function
function Auth() {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  //Inital State Data for sign Up and Sign In
  const initialState = {
    firstName: "",
    lastName: "",
    emall: "",
    password: "",
    confirmPassword: "",
  };

  const [state, setState] = useState(initialState);
  console.log(state);

  const { email, password, lastName, firstName, confirmPassword } = state;

  //handle change
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  //handle authentication with firebase

  const handleAuth = (e) => {
    e.preventDefault();

    if (!user) {
      if (email && password) {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in
            email;
            const user = userCredential.user;
            console.log(user);
            navigate("/");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
          });
      } else {
        return toast.error("All fields are mandatory to fill");
      }
    } else {
      if (password !== confirmPassword) {
        return;
      }
      if (firstName && lastName && email && password) {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            updateProfile(user, {
              displayName: `${firstName} ${lastName}`,
            });
            console.log(firstName);
            console.log(user);
            // setState(user);
            navigate("/");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });
      } else {
        return toast.error("All fields are mandatory to fill");
      }
    }
  };

  return (
    <>
      <div className={`${authStyle.body}`}>
        <div className={`${authStyle.card}`}>
          <div className={`${authStyle.heading}`}>
            {!user ? <h2>Sign in</h2> : <h2>Sign Up</h2>}
          </div>
          <div className={`${authStyle.flexCol} ${authStyle.itemsCenter}`}>
            <form action="" className={`${authStyle.form}`}>
              {/* show this extra form if in sign up page */}
              {user && (
                <div className={`${authStyle.flexCol} ${authStyle.gap}`}>
                  <div className={`${authStyle.inputBorder}`}>
                    <input
                      type="text"
                      placeholder="First Name"
                      name="firstName"
                      value={firstName}
                      onChange={handleChange}
                      className={`${authStyle.input} `}
                    />
                  </div>

                  <div className={`${authStyle.inputBorder}`}>
                    <input
                      type="text"
                      placeholder="Last Name"
                      name="lastName"
                      value={lastName}
                      onChange={handleChange}
                      className={`${authStyle.input}`}
                    />
                  </div>

                  <div className={`${authStyle.inputBorder}`}>
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      name="confirmPassword"
                      value={confirmPassword}
                      onChange={handleChange}
                      className={`${authStyle.input}`}
                    />
                  </div>
                </div>
              )}
              {/* end of show this extra form if in sign up page */}
              <div className={`${authStyle.inputBorder}`}>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  className={`${authStyle.input}`}
                />
              </div>
              <div className={`${authStyle.inputBorder}`}>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  className={`${authStyle.input}`}
                />
              </div>
              <div>
                <button
                  className={`${
                    !user ? `${authStyle.bgWhite}` : `${authStyle.bgWhite}`
                  } ${authStyle.signInSignUpBtnBig}`}
                  type="submit"
                  onClick={handleAuth}
                >
                  {!user ? "Sign In" : "Sign Up"}
                </button>
              </div>
            </form>

            <div>
              {!user ? (
                <>
                  <div className={`${authStyle.foot}o`}>
                    <p>Don't have an account ?</p>
                    <span
                      onClick={() => setUser(true)}
                      className={`${authStyle.signInSignUpBtnSmall}`}
                    >
                      Sign up
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <div className={`${authStyle.foot}`}>
                    <p>Already have an account? </p>
                    <span
                      onClick={() => setUser(false)}
                      className={`${authStyle.signInSignUpBtnSmall}`}
                    >
                      Sign In
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Auth;
