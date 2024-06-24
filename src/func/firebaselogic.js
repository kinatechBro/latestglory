export const addBlogPost = async (blogPost) => {
  try {
    await firestore.collection("blogPosts").add(blogPost);
  } catch (error) {
    throw new Error("Error adding blog post: " + error.message);
  }
};
