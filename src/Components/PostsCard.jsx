import { Link } from "react-router-dom";
import { TbMessage2 } from "react-icons/tb";
import { PiLinkBold } from "react-icons/pi";
import { PiArrowFatUpBold } from "react-icons/pi";
import { HiOutlineExternalLink } from "react-icons/hi";
import { useAuth } from "../contexts/UserProviderContext";

import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

import { Class, feed, gradientColor } from "../Data/Data";

function PostsCard({ postsData }) {
  const { user } = useAuth();
  const { id, title, img, timeStamp, tags } = postsData;
  return (
    <>
      <div>
        <div className="flex">
          <div
            className={`${feed.card} ${gradientColor.gradient} min-w-full`}
            key={id}
          >
            <Link to={`/singleposts/${id}`}>
              <button className={`${feed.readMore}`}>
                {/* <butsinglePostston>read more</butsinglePostston> */}
                read more
                <HiOutlineExternalLink />
              </button>
            </Link>

            {user && (
              <div className="absolute top-4 font-medium gap-4 bg-slate-900o flex text-2xl ">
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
            </div>
            <div>
              <button className={`${feed.tag}`}>{tags}</button>
              {/* <button className={`${feed.tag}`}>{tags.tag2}</button>
              <button className={`${feed.tag}`}>{tags.tag3}</button> */}
            </div>
            {/* <div>{timeStamp.toDate().toLocaleString()} • 16m read time</div> */}

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
