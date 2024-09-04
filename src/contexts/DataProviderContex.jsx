import { useContext, createContext, useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const dataContex = createContext();

function DataProviderContex({ children }) {
  const [postData, setPostData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPostsData = async () => {
    setIsLoading(true);
    let data = [];
    try {
      const querySnapshot = await getDocs(collection(db, "posts"));
      querySnapshot.forEach((doc) => {
        // console.log(`${doc.id} => ${doc.data()}`);
        data.push({ id: doc.id, ...doc.data() });
        setPostData(data);
        console.log(data);
        setIsLoading(false);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPostsData();
  }, []);

  return (
    <dataContex.Provider value={{ postData, setPostData }}>
      {children}
    </dataContex.Provider>
  );
}

export default DataProviderContex;

export function getData() {
  return useContext(dataContex);
}
