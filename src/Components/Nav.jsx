import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { gradientColor, navstyle } from "../Data/Data";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { collection, query, where, orderBy, getDocs } from "firebase/firestore";
import { useAuth } from "../contexts/UserProviderContext";
import logo from "../assets/kinatechbrainz.png";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { toast } from "react-toastify";

const {
  container,
  iconContainer,
  searchContainer,
  searchBarIcon,
  searchInput,
} = navstyle;

function Nav({ onSearch }) {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState("");
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    try {
      let postsQuery = query(
        collection(db, "posts"),
        where("title", ">=", searchTerm.toLowerCase()),
        where("title", "<=", searchTerm.toLowerCase() + "\uf8ff"),
        orderBy("title"),
        orderBy("timestamp", "desc")
      );

      const querySnapshot = await getDocs(postsQuery);
      const searchResults = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      onSearch(searchResults);
    } catch (error) {
      onSearch([]);
    }
  };

  function handleSignOut() {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        toast.success("Signed out successfully");
        // You can add additional actions here, such as redirecting to a login page
        window.location.reload();
        navigate("/auth");
      })
      .catch((error) => {
        // An error happened.
        toast.error("Error signing out: " + error.message);
      });
  }

  return (
    <div className={`${container} justify-between`}>
      <div className={iconContainer}>
        <Link to="/">
          <img
            src={logo}
            alt=""
            className={`${gradientColor.bgGradient} py-4 px-2 w-16 h-16 object-cover rounded-full `}
          />
        </Link>
        <div className="transition-all  ease-in-out duration-1000 scale-95">
          {user && (
            <div className="">
              <button
                className={`${gradientColor.bgGradient} w-32 rounded-full p-2 transition-all  ease-in-out hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                onClick={handleToggle}
              >
                {!toggle ? "Options" : "Close"}
              </button>
            </div>
          )}
        </div>
      </div>
      <div>
        <form className={searchContainer} onSubmit={handleSearch}>
          <IoSearchOutline className={searchBarIcon} />
          <input
            type="text"
            placeholder="Search..."
            className={searchInput}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            type="submit"
            className={`${gradientColor.bgGradient} px-6 py-2 rounded-r-full focus:outline-none focus:ring-2 focus:ring-offset-2 absolute right-0`}
          >
            Submit
          </button>
        </form>
      </div>

      {toggle && (
        <div className="flex gap-4 items-center py-4 rounded-xl transition-all justify-center  ease-in-out duration-1000">
          <Link
            to="/create"
            className={`${gradientColor.bgGradient} p-2 rounded-full transition-all  ease-in-out hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2`}
          >
            Create Post
          </Link>

          <Link
            to="/register"
            className={`${gradientColor.bgGradient} p-2 rounded-full transition-all  ease-in-out hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2`}
          >
            Add User
          </Link>

          <button
            className="bg-red-500 p-2 rounded-full transition-all  ease-in-out hover:scale-110 duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
            onClick={handleSignOut}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default Nav;
