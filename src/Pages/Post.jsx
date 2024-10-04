import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Class, feed, gradientColor } from "../Data/Data";
import { MdDelete } from "react-icons/md";
import { HiOutlineExternalLink } from "react-icons/hi";
import { PiLinkBold } from "react-icons/pi";
import { PiArrowFatUpBold } from "react-icons/pi";
import { TbMessage2 } from "react-icons/tb";
import { MdModeEdit } from "react-icons/md";
import { IoMdHeart } from "react-icons/io";

//contexts

import { useAuth } from "../contexts/UserProviderContext";
import { getData } from "../contexts/DataProviderContex";

// Slugify function to convert post title into URL-friendly format
function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-") // Replace spaces and special characters with "-"
    .replace(/(^-|-$)/g, ""); // Remove leading and trailing hyphens
}

const categories = [
  "Discover",
  {
    name: "Play",
    subcategories: [
      "Games",
      "Activities",
      "Quizzes",
      "Challenges",
      "Competitions",
    ],
  },
  {
    name: "Money",
    subcategories: [
      "Finance",
      "Crypto",
      "Stock Market",
      "Personal Finance",
      "Investing Tips",
    ],
  },
  {
    name: "Sports",
    subcategories: [
      "Football",
      "Basketball",
      "Tennis",
      "Olympics",
      "Sports News",
    ],
  },
  {
    name: "Gaming",
    subcategories: ["Console", "PC", "Mobile", "Esports", "Game Reviews"],
  },
  {
    name: "Weather",
    subcategories: [
      "Local Weather",
      "Global Forecasts",
      "Severe Alerts",
      "Climate Change",
      "Weather News",
    ],
  },
  {
    name: "Watch",
    subcategories: [
      "Movies",
      "TV Shows",
      "Documentaries",
      "Live Streams",
      "Reviews",
    ],
  },
  {
    name: "Learning",
    subcategories: [
      "Online Courses",
      "Tutorials",
      "Workshops",
      "Certifications",
      "Skill Development",
    ],
  },
  {
    name: "Health",
    subcategories: [
      "Fitness",
      "Nutrition",
      "Mental Health",
      "Wellness",
      "Health News",
    ],
  },
  {
    name: "Job",
    subcategories: [
      "Job Listings",
      "Career Advice",
      "Interviews",
      "Remote Work",
      "Freelancing",
      "Resume Building",
    ],
  },
  {
    name: "Travel",
    subcategories: [
      "Destinations",
      "Flight Deals",
      "Travel Tips",
      "Local Guides",
      "Travel News",
    ],
  },
  {
    name: "Traffic",
    subcategories: [
      "Road Conditions",
      "Accident Reports",
      "Commute Times",
      "Public Transit",
      "Traffic News",
    ],
  },
  {
    name: "News",
    subcategories: [
      "World",
      "Technology",
      "Business",
      "Entertainment",
      "Politics",
      "Health News",
    ],
  },
  {
    name: "Digital Marketing",
    subcategories: [
      "SEO",
      "Content Marketing",
      "Social Media Marketing",
      "Email Marketing",
      "PPC Advertising",
      "Analytics",
    ],
  },
  {
    name: "Tech",
    subcategories: [
      "Gadgets",
      "Software",
      "AI",
      "Blockchain",
      "Startups",
      "Reviews",
    ],
  },
  {
    name: "Blogging",
    subcategories: [
      "Writing Tips",
      "SEO for Blogs",
      "Content Creation",
      "Monetization",
      "Blog Promotion",
    ],
  },
  {
    name: "Lifestyle",
    subcategories: [
      "Fashion",
      "Home Decor",
      "Travel",
      "Personal Development",
      "Food & Drink",
    ],
  },
  {
    name: "Business",
    subcategories: [
      "Entrepreneurship",
      "Startups",
      "Leadership",
      "Management",
      "Small Business Tips",
    ],
  },
];

const Post = () => {
  const [moreTags, setMoreTags] = useState(false);
  const [showSubcategories, setShowSubcategories] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const {
    postData,
    loading,
    setLoading,
    selectedCategory,
    setSelectedCategory,
  } = getData();
  const { user } = useAuth();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6 ">
        <div className="flex flex-wrap gap-4">
          {categories.map((category, index) => (
            <div key={index} className="relative">
              <button
                onClick={() => {
                  if (typeof category === "string") {
                    setSelectedCategory(category);
                    setShowSubcategories(false);
                    setActiveCategory(null);
                  } else {
                    setActiveCategory(
                      activeCategory === category.name ? null : category.name
                    );
                    setShowSubcategories(true);
                  }
                }}
                className={`px-4 py-2 rounded-full ${
                  selectedCategory ===
                  (typeof category === "string" ? category : category.name)
                    ? `${gradientColor.bgGradient} text-white`
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {typeof category === "string" ? category : category.name}
              </button>
              {showSubcategories && activeCategory === category.name && (
                <div className=" absolute mt-2 w-40 z-10 rounded-md shadow-lg overflow-hidden bg-gradient-to-br from-purple-700 via-indigo-800 to-blue-900">
                  <div className="py-1">
                    {category.subcategories.map((subcat, subIndex) => (
                      <button
                        key={subIndex}
                        onClick={() => {
                          setSelectedCategory(subcat);
                          setShowSubcategories(false);
                          setActiveCategory(null);
                        }}
                        className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-white hover:bg-opacity-10"
                      >
                        {subcat}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Rest of the component remains unchanged */}
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : postData.length === 0 ? (
        <div className="text-center bg-blue-500 flex justify-center items-center">
          No posts found, Check your internet connection
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {postData.map((post) => {
            const {
              id,
              title,
              category,
              tags,
              coverImageUrl,
              timeStamp,
              content,
              author,
              isTrending,
              timestamp,
            } = post;
            return (
              <>
                <div
                  className={`${feed.card} ${gradientColor.gradient} min-w-full `}
                  key={id}
                >
                  {/* <Link to={`/singleposts/${id}`}>
                    <button className={`${feed.readMore}`}>
                      <butsinglePostston>read more</butsinglePostston>
                      read more
                      <HiOutlineExternalLink />
                    </button>
                  </Link> */}
                  {user && (
                    <div className="absolute top-4 font-medium gap-4 mb-8  flex text-2xl">
                      <button className="">
                        <MdDelete />
                      </button>
                      <button>
                        <MdModeEdit />
                      </button>
                    </div>
                  )}

                  <div>
                    <p className={`${feed.heading}`}>{title}</p>
                    {isTrending && (
                      <span
                        className={`my-10 text-white rounded-md p-1 text-xs bg-gradient-to-br from-red-500 to-white-600`}
                      >
                        HOT 🔥
                      </span>
                    )}
                  </div>
                  <div>
                    {/* <button className={`${feed.tag}`}>

                    </button> */}
                    <button className={`${feed.tag} `}>
                      {tags.slice(0, 2).map((tag, index) => (
                        <span
                          key={index}
                          className={`${gradientColor.bgGradient} text-white rounded-md p-1 text-xs`}
                        >
                          {`#${tag}`}
                        </span>
                      ))}
                      {tags.length > 2 && !moreTags && (
                        <span
                          className={`${gradientColor.bgGradient}text-white rounded-md p-1 text-xs`}
                          onClick={() => setMoreTags(!moreTags)}
                        >
                          {`+${tags.length - 2} tags`}
                        </span>
                      )}

                      {moreTags && (
                        <div>
                          {tags.slice(2).map((tag, index) => (
                            <span
                              key={index}
                              className={`${gradientColor.bgGradient} text-white rounded-md p-1 text-xs mr-2`}
                            >
                              {`#${tag}`}
                            </span>
                          ))}
                        </div>
                      )}
                    </button>
                  </div>

                  <div>
                    {coverImageUrl && (
                      <img
                        src={coverImageUrl}
                        alt={title}
                        className={`${feed.img}`}
                      />
                    )}
                    <p className="text-gray-400 text-sm mb-2">
                      By {author} | {category}
                      <div>{timestamp.toDate().toLocaleString()} </div>
                    </p>
                  </div>

                  <Link to={`/singleposts/${id}`}>
                    <button
                      className={` flex items-center gap-2 bg-white rounded-md text-black p-2 absolute right-4 bottom-12`}
                    >
                      {/* <butsinglePostston>read more</butsinglePostston> */}
                      read more
                      <HiOutlineExternalLink />
                    </button>
                  </Link>

                  <div
                    className={`${feed.ico} ${Class.justifyBetween} text-white `}
                  >
                    <div className={`${feed.ico}`}>
                      <IoMdHeart fontSize={22} fontWeight={700} />
                      15
                    </div>
                    <div className={`${feed.ico}`}>
                      <TbMessage2 fontSize={22} fontWeight={700} />
                      15
                    </div>
                    <div className={`${feed.ico}`}>
                      <PiLinkBold fontSize={22} fontWeight={700} />
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Post;
