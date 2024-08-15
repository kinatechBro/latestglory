import {
  singlePosts,
  postsTags,
  sections,
  paragraphs,
  latestPosts,
  laptop,
  feed,
  Class,
} from "../Data/Data";
import { PiArrowFatUpBold } from "react-icons/pi";
import { TbMessage2 } from "react-icons/tb";
import { PiLinkBold } from "react-icons/pi";

import PostsCard from "../Components/PostsCard";

import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getData } from "../contexts/DataProviderContex";

function SinglePost() {
  const { postData } = getData();
  console.log(postData);
  const { id } = useParams();
  const [readMore, setReadMore] = useState(null);
  useEffect(() => {
    id && getSingleData();
  }, [id]);

  const getSingleData = async () => {
    try {
      const docRef = doc(db, "posts", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setReadMore(docSnap.data());
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <div className={`${singlePosts.white}`}>
          <nav className={`${singlePosts.nav}`}>
            <h1 className={`${singlePosts.navContentStyle}`}>
              {singlePosts.navContent}
            </h1>
          </nav>

          <div
            // className={`grid gap-2  md:grid-cols-[auto_70%_auto] xl:grid-cols-[20%_50%_auto] grid-cols-1 w-full`}
            className={`grid lg:grid-cols-[20%_50%_auto] gap-1`}
          >
            <div
              className={`lg:order-1 order-3  p-4 bg-[#201f1f]`}
            >
            </div>

            <div
              className={`lg:order-2 order-1 p-4 ${sections.style} ${sections.px16} px-2 py-4 `}
            >
              <h1 className={`${paragraphs.postHeading}`}>{readMore?.title}</h1>
              <div className={`${paragraphs.imgContainer}`}>
                <img
                  src={readMore?.img}
                  alt=""
                  className={`${paragraphs.imgStyle}`}
                />
              </div>

              <h3 className={`${paragraphs.subhead}`}>{readMore?.title}</h3>

              <div className={`${paragraphs.style}`}>
                {readMore?.description}
              </div>

              <div
                className={`${feed.ico} ${Class.justifyBetween} bg-[#252525] rounded-lg p-2 cursor-pointer my-4`}
              >
                <div className={`${feed.ico}`}>
                  <PiArrowFatUpBold fontSize={22} fontWeight={700} />
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

              <div className="bg-[#252525] rounded-lg p-1 ">
                <h3 className={`${paragraphs.subhead} py-2`}>Similar Posts</h3>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                  {postData.map((posts) => {
                    console.log(posts);
                    const { id, title, img } = posts;
                    return (
                      <Link key={id} to={`/singleposts/${posts.id}`}>
                        <div className=" bg-[#333] p-2 rounded-md flex flex-col gap-2">
                          <h3
                            className={`font-[500] text-lg leading-5 text-wrap`}
                          >
                            {title}
                          </h3>
                          <img
                            src={img}
                            alt=""
                            className="rounded-md bg-[#414141] w-full"
                          />
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            <div
              className={`${sections.style} ${sections.grid} order-2 lg:order-3`}
            >
              <div className={`${sections.pt16}`}>
                <div className={`${postsTags.style}`}>Latest posts</div>
                <div className="grid grid-cols-2 gap-2 pb-4 ">
                  {postData.map((posts) => {
                    return (
                      <div
                        key={posts.id}
                        className=" bg-[#333] p-2 rounded-md flex flex-col gap-2 cursor-pointer"
                      >
                        <h3
                          className={`font-[500] text-lg leading-5 text-wrap`}
                        >
                          {posts.title}
                        </h3>
                        <img
                          src={posts.img}
                          alt=""
                          className="rounded-md bg-[#414141] w-full"
                        />
                      </div>
                    );
                  })}
                </div>

                <div className={`${postsTags.style}`}>Popular posts</div>

                <div
                  className={`${postsTags.latestPostStyle} cursor-pointer`}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SinglePost;
