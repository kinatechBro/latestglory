import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { IoMdHeart } from "react-icons/io";
import DOMPurify from "dompurify";

import {
  doc,
  getDoc,
  updateDoc,
  collection,
  addDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { db } from "../firebase";
import { PiArrowFatUpBold, PiLinkBold } from "react-icons/pi";
import { TbMessage2 } from "react-icons/tb";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { getData } from "../contexts/DataProviderContex";
import { gradientColor, paragraphs } from "../Data/Data";

function SinglePost() {
  const { postData } = getData();
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [similarPosts, setSimilarPosts] = useState([]);
  const [showShareOptions, setShowShareOptions] = useState(false);

  useEffect(() => {
    if (id) {
      getSingleData();
      getComments();
      getSimilarPosts();
    }
  }, [id]);

  const getSingleData = async () => {
    try {
      const docRef = doc(db, "posts", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setPost({ id: docSnap.id, ...docSnap.data() });
      } else {
      }
    } catch (error) {}
  };

  const getComments = async () => {
    try {
      const q = query(collection(db, "comments"), where("postId", "==", id));
      const querySnapshot = await getDocs(q);
      setComments(
        querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    } catch (error) {}
  };

  const getSimilarPosts = async () => {
    if (post && post.tags) {
      try {
        const q = query(
          collection(db, "posts"),
          where("tags", "array-contains-any", post.tags)
        );
        const querySnapshot = await getDocs(q);
        setSimilarPosts(
          querySnapshot.docs
            .map((doc) => ({ id: doc.id, ...doc.data() }))
            .filter((p) => p.id !== id)
            .slice(0, 3)
        );
      } catch (error) {}
    }
  };

  const handleLike = async () => {
    if (post) {
      const newLikes = (post.likes || 0) + 1;
      const postRef = doc(db, "posts", id);
      await updateDoc(postRef, { likes: newLikes });
      setPost({ ...post, likes: newLikes });
    }
  };

  const handleComment = async (e) => {
    e.preventDefault();
    if (comment.trim() !== "") {
      try {
        await addDoc(collection(db, "comments"), {
          postId: id,
          content: comment,
          createdAt: new Date(),
        });
        setComment("");
        getComments();
      } catch (error) {
        toast.error("Error adding comment: ");
      }
    }
  };

  const handleShare = async () => {
    const shareUrl = window.location.href;
    const shareTitle = post.title;
    const shareText = `Check out this post: ${shareTitle}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url: shareUrl,
        });
      } catch (error) {
        toast.error("Error sharing: " + error.message);
        setShowShareOptions(true);
      }
    } else {
      setShowShareOptions(true);
    }
  };

  const shareToSocialMedia = (platform) => {
    const shareUrl = encodeURIComponent(window.location.href);
    const shareTitle = encodeURIComponent(post.title);
    let shareLink;

    switch (platform) {
      case "facebook":
        shareLink = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;
        break;
      case "twitter":
        shareLink = `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`;
        break;
      case "linkedin":
        shareLink = `https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${shareTitle}`;
        break;
      case "whatsapp":
        shareLink = `https://api.whatsapp.com/send?text=${shareTitle}%20${shareUrl}`;
        break;
      default:
        return;
    }

    window.open(shareLink, "_blank");
  };

  if (!post) {
    return (
      <div className=" text-white min-h-screen flex justify-center items-center bg-[#201f1f]  ">
        Loading...
      </div>
    );
  }

  const sanitizedContent = DOMPurify.sanitize(post.content);

  return (
    <div className="bg-[#201f1f] text-white min-h-screen">
      <nav className="bg-[#252525] p-4"></nav>

      <div className="grid lg:grid-cols-[20%_50%_auto] gap-1">
        <div className="lg:order-1 order-3 p-4"></div>

        <div className="lg:order-2 order-1 p-4">
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
          <div className="mb-4">
            <img
              src={post.coverImageUrl}
              alt={post.title}
              className={`${paragraphs.imgContainer} `}
            />
          </div>

          <div
            className="mb-6"
            dangerouslySetInnerHTML={{ __html: sanitizedContent }}
          ></div>

          <div className="flex justify-between items-center bg-[#252525] rounded-lg p-2 cursor-pointer my-4">
            <div className="flex items-center gap-2" onClick={handleLike}>
              <IoMdHeart fontSize={22} />
              <span>{post.likes || 0}</span>
            </div>
            <div className="flex items-center gap-2">
              <TbMessage2 fontSize={22} />
              <span>{comments.length}</span>
            </div>
            <div onClick={handleShare}>
              <PiLinkBold fontSize={22} />
            </div>
          </div>

          {showShareOptions && (
            <div className="mt-4 flex justify-center space-x-4">
              <button
                onClick={() => shareToSocialMedia("facebook")}
                className="bg-blue-600 p-2 rounded-full"
              >
                <FaFacebookF />
              </button>
              <button
                onClick={() => shareToSocialMedia("twitter")}
                className="bg-blue-400 p-2 rounded-full"
              >
                <FaTwitter />
              </button>
              <button
                onClick={() => shareToSocialMedia("linkedin")}
                className="bg-blue-700 p-2 rounded-full"
              >
                <FaLinkedinIn />
              </button>
              <button
                onClick={() => shareToSocialMedia("whatsapp")}
                className="bg-green-500 p-2 rounded-full"
              >
                <FaWhatsapp />
              </button>
            </div>
          )}

          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">Comments</h3>
            <form onSubmit={handleComment} className="mb-4">
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full p-2 rounded bg-[#333] text-white"
                placeholder="Add a comment..."
                rows="3"
              ></textarea>
              <button
                type="submit"
                className={`${gradientColor.bgGradient}  mt-2 text-white px-4 py-2 rounded`}
              >
                Post Comment
              </button>
            </form>
            <div className="space-y-4">
              {comments.map((comment) => (
                <div key={comment.id} className="bg-[#333] p-4 rounded">
                  <p>{comment.content}</p>
                  <span className="text-sm text-gray-400">
                    {comment.createdAt.toDate().toLocaleDateString()}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:order-3 order-2 p-4">
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Latest Posts</h3>
            <div className="grid grid-cols-2 gap-2">
              {postData.slice(0, 6).map((post) => (
                <div key={post.id} className="bg-[#333] p-2 rounded-md">
                  <Link to={`/singleposts/${post.id}`}>
                    <h4 className="font-medium text-lg mb-2">{post.title}</h4>
                    <img
                      src={post.coverImageUrl}
                      alt={post.title}
                      className="w-full rounded-md h-32 object-cover"
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Similar Posts</h3>
            <div className="space-y-4">
              {similarPosts.map((post) => (
                <div key={post.id} className="bg-[#333] p-2 rounded-md">
                  <Link to={`/singleposts/${post.id}`}>
                    <h4 className="font-medium text-lg mb-2">{post.title}</h4>
                    <img
                      src={post.coverImageUrl}
                      alt={post.title}
                      className="w-full rounded-md h-64 object-cover"
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePost;
