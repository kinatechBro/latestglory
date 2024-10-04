import { useContext, createContext, useState, useEffect } from "react";
import {
  collection,
  doc,
  query,
  where,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { toast } from "react-toastify";

import { db } from "../firebase";

const dataContex = createContext();

function DataProviderContex({ children }) {
  const [postData, setPostData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Discover");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, [selectedCategory]);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      let postsQuery;
      if (selectedCategory === "Discover") {
        postsQuery = query(collection(db, "posts"));
      } else {
        postsQuery = query(
          collection(db, "posts"),
          where("category", "==", selectedCategory)
        );
      }

      const querySnapshot = await getDocs(postsQuery);
      const fetchedPosts = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPostData(fetchedPosts);
    } catch (error) {
      toast.error("Error Fetching Posts");
    } finally {
      setLoading(false);
    }
  };

  return (
    <dataContex.Provider
      value={{
        postData,
        setPostData,
        loading,
        setLoading,
        selectedCategory,
        setSelectedCategory,
      }}
    >
      {children}
    </dataContex.Provider>
  );
}

export default DataProviderContex;

export function getData() {
  return useContext(dataContex);
}
