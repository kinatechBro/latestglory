import React, { useState } from "react";
import ReactQuill from "react-quill";
import { app } from "../firebase";
//import { addBlogPost } from "../func/firebase";
import "react-quill/dist/quill.snow.css"; // Import Quill styles
import { addBlogPost } from "../func/firebaselogic";
const BlogPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleContentChange = (value) => {
    setContent(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const blogPost = {
      title,
      content,
    };

    try {
      await addBlogPost(blogPost);
      alert("Blog post added successfully");
      setTitle("");
      setContent("");
    } catch (error) {
      alert("Error adding blog post: " + error.message);
    }
  };

  return (
    <div>
      <h1>Add Blog Post</h1>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label>Content:</label>
        <ReactQuill
          theme="snow"
          value={content}
          onChange={handleContentChange}
          required
        />

        <button type="submit">Add Blog Post</button>
      </form>
    </div>
  );
};

export default BlogPostForm;
