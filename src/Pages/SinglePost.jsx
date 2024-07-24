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
import { useParams } from "react-router-dom";

function SinglePost() {
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
            className={`grid gap-2  md:grid-cols-[70%_auto] xl:grid-cols-[20%_50%_auto] grid-cols-1 w-full`}
          >
            <div
              className={`bg-[#201f1f] h-auto hidden xl:grid rounded-md`}
            ></div>

            <div className={` ${sections.style} ${sections.px16} px-2 py-4 `}>
              <h1 className={`${paragraphs.postHeading}`}>
                {/* {paragraphs.postHeadingText} */}
                {readMore?.title}
              </h1>
              <div className={`${paragraphs.imgContainer}`}>
                <img src={readMore?.img} alt="" className={`${paragraphs.imgStyle}`} />
              </div>

              <h3 className={`${paragraphs.subhead}`}>
                {/* {paragraphs.subheadText} */}
                {readMore?.title}
              </h3>

              <div className={`${paragraphs.style}`}>
                {/* <p>{paragraphs.paragraphsText}</p>
                <p>{paragraphs.paragraphsText}</p>
                <p>{paragraphs.paragraphsText}</p> */}
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

              <div className="bg-[#252525] rounded-lg p-1">
                <h3 className={`${paragraphs.subhead} py-2`}>Similar Posts</h3>
                <div className={`${postsTags.latestPostStyle} cursor-pointer`}>
                  {latestPosts.map((posts) => {
                    return (
                      <div key={posts.id}>
                        <div className={`${postsTags.latestPostLinks} h-52`}>
                          <h3 className={`font-[500] text-lg leading-5`}>
                            {posts.text}
                          </h3>
                          <img
                            src={posts.img}
                            alt=""
                            className="rounded-md bg-[#414141]"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div
              className={`${sections.style} ${sections.hidden} ${sections.grid} `}
            >
              <div className={`${sections.pt16}`}>
                <div className={`${postsTags.style}`}>Latest posts</div>

                <div className={`flex items-center gap-2 pb-2`}>
                  {latestPosts.map((posts) => {
                    return (
                      <div key={posts.id}>
                        <div
                          className={`rounded-md bg-[#333] p-1 h-40 flex justify-between flex-col`}
                        >
                          <h3 className={`font-[500] text-base leading-5`}>
                            {posts.text}
                          </h3>
                          <img
                            src={posts.img}
                            alt=""
                            className="rounded-md bg-[#414141]"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className={`${postsTags.style}`}>Popular posts</div>
                <div className={`${postsTags.latestPostStyle} cursor-pointer`}>
                  {latestPosts.map((posts) => {
                    return (
                      <div key={posts.id}>
                        <div className={`${postsTags.latestPostLinks} h-52`}>
                          <h3 className={`font-[500] text-lg leading-5`}>
                            {posts.text}
                          </h3>
                          <img
                            src={posts.img}
                            alt=""
                            className="rounded-md bg-[#414141]"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SinglePost;
