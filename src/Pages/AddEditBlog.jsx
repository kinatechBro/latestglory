import { useState, useEffect } from "react";
import { categories, createBlog } from "../Data/Data";

import { db, storage } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { toast } from "react-toastify";

const initalState = {
  title: "",
  category: "",
  tags: [],
  description: "",
  trenidng: "No",
};

function AddEditBlog({ user }) {
  const [form, setForm] = useState(initalState);
  const [file, setFile] = useState(null);
  const { title, tags, category, trenidng, description } = form;

  const uploadMedia = () => {
    // Create the file metadata
    /** @type {any} */
    const metadata = {
      contentType: "image/jpeg",
    };

    // Upload file and metadata to the object 'images/mountains.jpg'
    const storageRef = ref(storage, "postsImages/" + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        toast.info("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case "storage/unauthorized":
            // User doesn't have permission to access the object
            break;
          case "storage/canceled":
            // User canceled the upload
            break;

          // ...

          case "storage/unknown":
            // Unknown error occurred, inspect error.serverResponse
            break;
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL

        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          toast.success("Upload is done");
          setForm((preValue) => ({ ...preValue, img: downloadURL }));
        });
      }
    );
  };

  useEffect(() => {
    file && uploadMedia();
  }, [file]);

  console.log(form);

  // firbase
  const sendToDb = async () => {
    try {
      const docRef = await addDoc(collection(db, "posts"), {
        ...form,
        timeStamp: serverTimestamp(),
        author: user.displayName,
        userId: user.uid,
      });
      console.log("Document written with ID: ", docRef.id);
      toast.success("Blog added sucessfull");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  // firbase

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendToDb();
  };
  const handleTrending = () => {};
  const onCategryChange = () => {};
  return (
    <div className={`${createBlog.parentContainer}`}>
      <div className={`${createBlog.container}`}>
        <h1 className={`${createBlog.heading}`}>Create Blogposts </h1>

        <div>
          <form>
            <div>
              <input
                type="text"
                placeholder="Blog title"
                name="title"
                value={title}
                onChange={handleChange}
                className={`${createBlog.titleInput}`}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="title"
                name="tags"
                value={tags}
                onChange={handleChange}
                className={`${createBlog.titleInput}`}
              />
            </div>

            <div className={`${createBlog.flexGap}`}>
              <p className="text-2xl"> is it a trending post </p>
              <div className={`${createBlog.radio}`}>
                <div className={`${createBlog.radioOption}`}>
                  <input
                    type="radio"
                    name="trenidng"
                    value="yes"
                    checked={trenidng === "yes"}
                    onChange={handleChange}
                  />
                  <label> yes</label>
                </div>

                <div className={`${createBlog.radioOption}`}>
                  <input
                    type="radio"
                    name="trenidng"
                    value="no"
                    checked={trenidng === "no"}
                    onChange={handleChange}
                  />
                  <label>no</label>
                </div>
              </div>

              <div>
                <select
                  name="category"
                  value={category}
                  onChange={handleChange}
                  className="w-80 p-2 rounded-md border-none outline-none text-black"
                >
                  <option>Select Category</option>
                  {categories.map((option, index) => (
                    <option value={option || ""} key={index}>
                      {option.category}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <textarea
                  name="description"
                  value={description}
                  placeholder="decription"
                  onChange={handleChange}
                  className={`${createBlog.textarea}`}
                ></textarea>
              </div>

              <div>
                {/* <input
                  type="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  className="border-2 border-transparent bg-transparent "
                /> */}

                <div className={`${createBlog.fileInputDiv}`}>
                  <label
                    for="dropzone-file"
                    className={`${createBlog.fileInputLabel}`}
                  >
                    <div className={`${createBlog.fileInputSvg}`}>
                      <p className={`${createBlog.fileInputText}`}>
                        <span className={`${createBlog.fileInputSpan}`}>
                          Click to upload
                        </span>{" "}
                        or drag and drop
                      </p>
                      <p className={`${createBlog.fileInputFileType}`}>
                        SVG, PNG, JPG or GIF (MAX. 800x400px)
                      </p>
                    </div>
                    <input
                      id="dropzone-file"
                      type="file"
                      className={`${createBlog.fileInputHidden}`}
                      onChange={(e) => setFile(e.target.files[0])}
                    />
                  </label>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className={`${createBlog.submitBtn}`}
                >
                  Add Blog
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddEditBlog;
