import { Link } from "react-router-dom";
import { TbMessage2 } from "react-icons/tb";
import { PiLinkBold } from "react-icons/pi";
import { PiArrowFatUpBold } from "react-icons/pi";
import { HiOutlineExternalLink } from "react-icons/hi";

import { tags, Class, feed, gradientColor } from "../Data/Data";

function PostsCard({ postsData }) {
  return (
    <>
      <div className={`${feed.responsive} `}>
        {postsData.map((posts) => {
          return (
            <>
              <div
                className={`${feed.card} ${gradientColor.gradient} `}
                key={posts.id}
              >
                <Link to="singlePosts">
                  <button className={`${feed.readMore}`}>
                    <butsinglePostston>read more</butsinglePostston>
                    <HiOutlineExternalLink />
                  </button>
                </Link>
                <div>
                  <p className={`${feed.heading}`}>{posts.text}</p>
                </div>
                <div>
                  <button className={`${feed.tag}`}>{tags.tag1}</button>
                  <button className={`${feed.tag}`}>{tags.tag2}</button>
                  <button className={`${feed.tag}`}>{tags.tag3}</button>
                </div>
                <div>June {feed.day} • 16m read time</div>

                <div>
                  <img src={posts.img} alt="image" className={`${feed.img}`} />
                </div>

                <div className={`${feed.ico} ${Class.justifyBetween}`}>
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
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default PostsCard;
