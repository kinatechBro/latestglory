import { Link } from "react-router-dom";
import { TbMessage2 } from "react-icons/tb";
import { PiLinkBold } from "react-icons/pi";
import { PiArrowFatUpBold } from "react-icons/pi";
import { HiOutlineExternalLink } from "react-icons/hi";

import { Class, feed, gradientColor, } from "../Data/Data";

function PostsCard({ postsData, user}) {
  const {id, title,img,timeStamp, tags,} = postsData;
  return (
    <>
      <div>
        <div className="flex">
          <div className={`${feed.card} ${gradientColor.gradient}`} key={id}>
            <Link to={`/singleposts/${id}`}>
              <button className={`${feed.readMore}`}>
                {/* <butsinglePostston>read more</butsinglePostston> */}
                read more
                <HiOutlineExternalLink />
              </button>
            </Link>

            {user && (
              <div>
                <button className={`${feed.readMorey}`}>
                  {/* <butsinglePostston>read more</butsinglePostston> */}
                  delete
                  {/* <HiOutlineExternalLink /> */}
                </button>
                <button className={`${feed.readMoreyy}`}>
                  {/* <butsinglePostston>read more</butsinglePostston> */}
                  edit
                  {/* <HiOutlineExternalLink /> */}
                </button>
              </div>
            )}

            <div>
              <p className={`${feed.heading}`}>{title}</p>
            </div>
            <div>
              <button className={`${feed.tag}`}>{tags}</button>
              {/* <button className={`${feed.tag}`}>{tags.tag2}</button>
              <button className={`${feed.tag}`}>{tags.tag3}</button> */}
            </div>
            <div>{timeStamp.toDate().toLocaleString()} • 16m read time</div>

            <div>
              <img src={img} alt="image" className={`${feed.img}`} />
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
        </div>
      </div>
    </>
  );
}

export default PostsCard;
