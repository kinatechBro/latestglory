import React, { useState, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { db, storage } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../contexts/UserProviderContext";

const initialState = {
  title: "",
  category: "",
  tags: [],
  isTrending: false,
};

const categories = [
  "Discover",
  "Play",
  "Games",
  "Activities",
  "Quizzes",
  "Challenges",
  "Competitions",
  "Money",
  "Finance",
  "Crypto",
  "Stock Market",
  "Personal Finance",
  "Investing Tips",
  "Sports",
  "Football",
  "Basketball",
  "Tennis",
  "Olympics",
  "Sports News",
  "Gaming",
  "Console",
  "PC",
  "Mobile",
  "Esports",
  "Game Reviews",
  "Weather",
  "Local Weather",
  "Global Forecasts",
  "Severe Alerts",
  "Climate Change",
  "Weather News",
  "Watch",
  "Movies",
  "TV Shows",
  "Documentaries",
  "Live Streams",
  "Reviews",
  "Learning",
  "Online Courses",
  "Tutorials",
  "Workshops",
  "Certifications",
  "Skill Development",
  "Health",
  "Fitness",
  "Nutrition",
  "Mental Health",
  "Wellness",
  "Health News",
  "Job",
  "Job Listings",
  "Career Advice",
  "Interviews",
  "Remote Work",
  "Freelancing",
  "Resume Building",
  "Travel",
  "Destinations",
  "Flight Deals",
  "Travel Tips",
  "Local Guides",
  "Travel News",
  "Traffic",
  "Road Conditions",
  "Accident Reports",
  "Commute Times",
  "Public Transit",
  "Traffic News",
  "News",
  "World",
  "Technology",
  "Business",
  "Entertainment",
  "Politics",
  "Health News",
  "Digital Marketing",
  "SEO",
  "Content Marketing",
  "Social Media Marketing",
  "Email Marketing",
  "PPC Advertising",
  "Analytics",
  "Tech",
  "Gadgets",
  "Software",
  "AI",
  "Blockchain",
  "Startups",
  "Reviews",
  "Blogging",
  "Writing Tips",
  "SEO for Blogs",
  "Content Creation",
  "Monetization",
  "Blog Promotion",
  "Lifestyle",
  "Fashion",
  "Home Decor",
  "Personal Development",
  "Food & Drink",
  "Business",
  "Entrepreneurship",
  "Startups",
  "Leadership",
  "Management",
  "Small Business Tips",
];
const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "link",
  "image",
];

function AdvancedBlogPostEditor() {
  const { user } = useAuth();
  const [form, setForm] = useState(initialState);
  const [content, setContent] = useState("");
  const [coverFile, setCoverFile] = useState(null);
  const [middleFile, setMiddleFile] = useState(null);
  const [coverPreview, setCoverPreview] = useState(null);
  const [middlePreview, setMiddlePreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const quillRef = useRef();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleContentChange = (value) => {
    setContent(value);
  };

  const handleTagChange = (e) => {
    const tags = e.target.value.split(",").map((tag) => tag.trim());
    setForm((prevForm) => ({ ...prevForm, tags }));
  };

  const handleFileChange = (e, setFile, setPreview) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setPreview(null);
    }
  };

  const uploadMedia = async (file, path) => {
    if (!file) return null;

    const storageRef = ref(storage, `${path}/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    return new Promise((resolve, reject) => {
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          toast.info(`Upload is ${progress.toFixed(0)}% done`);
        },
        (error) => {
          toast.error("Upload failed");
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            toast.success("Image uploaded successfully");
            resolve(downloadURL);
          });
        }
      );
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const coverImageUrl = await uploadMedia(coverFile, "blog-cover-images");
      const middleImageUrl = await uploadMedia(
        middleFile,
        "blog-middle-images"
      );

      const blogData = {
        ...form,
        content,
        coverImageUrl,
        middleImageUrl,
        timestamp: serverTimestamp(),
        author: user.displayName,
        userId: user.uid,
      };

      await addDoc(collection(db, "posts"), blogData);
      toast.success("Blog post added successfully");
      setForm(initialState);
      setContent("");
      setCoverFile(null);
      setMiddleFile(null);
      setCoverPreview(null);
      setMiddlePreview(null);
    } catch (error) {
      toast.error("Error adding blog post");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-indigo-800 to-blue-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-white bg-opacity-10 p-8 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-white">
          Create New Blog Post
        </h1>
        <div className="flex flex-wrap -mx-3">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            {coverPreview && (
              <div className="mb-6">
                <img
                  src={coverPreview}
                  alt="Cover Preview"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            )}
            <div className="mb-6">
              <label
                htmlFor="coverImage"
                className="block text-sm font-medium text-white mb-2"
              >
                Cover Image
              </label>
              <input
                type="file"
                id="coverImage"
                onChange={(e) =>
                  handleFileChange(e, setCoverFile, setCoverPreview)
                }
                className="w-full text-sm text-white
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-indigo-50 file:text-indigo-700
                  hover:file:bg-indigo-100"
              />
            </div>
            {middlePreview && (
              <div className="mb-6">
                <img
                  src={middlePreview}
                  alt="Middle Preview"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            )}
            <div>
              <label
                htmlFor="middleImage"
                className="block text-sm font-medium text-white mb-2"
              >
                Middle Image
              </label>
              <input
                type="file"
                id="middleImage"
                onChange={(e) =>
                  handleFileChange(e, setMiddleFile, setMiddlePreview)
                }
                className="w-full text-sm text-white
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-indigo-50 file:text-indigo-700
                  hover:file:bg-indigo-100"
              />
            </div>
          </div>
          <div className="w-full md:w-2/3 px-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-white"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-white bg-opacity-20 text-white"
                />
              </div>

              <div>
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-white"
                >
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-white bg-opacity-20 text-white"
                >
                  <option value="">Select a category</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="tags"
                  className="block text-sm font-medium text-white"
                >
                  Tags (comma-separated)
                </label>
                <input
                  type="text"
                  id="tags"
                  name="tags"
                  value={form.tags.join(", ")}
                  onChange={handleTagChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-white bg-opacity-20 text-white"
                />
              </div>

              <div>
                <label
                  htmlFor="content"
                  className="block text-sm font-medium text-white mb-2"
                >
                  Content
                </label>
                <ReactQuill
                  ref={quillRef}
                  value={content}
                  onChange={handleContentChange}
                  modules={modules}
                  formats={formats}
                  className="bg-white bg-opacity-20 rounded-md text-white"
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="isTrending"
                  name="isTrending"
                  checked={form.isTrending}
                  onChange={handleChange}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="isTrending"
                  className="ml-2 block text-sm text-white"
                >
                  Mark as trending
                </label>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
                >
                  {isSubmitting ? "Submitting..." : "Publish Blog Post"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default AdvancedBlogPostEditor;
