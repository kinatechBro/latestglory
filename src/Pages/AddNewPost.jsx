import React from "react";
import { app } from "../firebase";
import { firestore } from "firebase/firestore";
function AddNewPost() {
  const addBlogPost = async (blogPost) => {
    const newPostRef = firestore.collection("blogPosts").doc();
    await newPostRef.set(blogPost);
  };
  const blogPost = {
    title: "My Blog Post",
    content: "This is the content of my blog post",
    // Add any other fields you need for your blog post
  };

  addBlogPost(blogPost)
    .then(() => {
      console.log("Blog post added successfully");
    })
    .catch((error) => {
      console.error("Error adding blog post:", error);
    });
  return <div>AddNewPost</div>;
}

export default AddNewPost;
