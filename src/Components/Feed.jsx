import Trending from "./Trending";
import { Link } from "react-router-dom";
import { TbMessage2 } from "react-icons/tb";
import { PiLinkBold } from "react-icons/pi";
import { PiArrowFatUpBold } from "react-icons/pi";

import { heading, trend, blogPosts, card } from "../Styles/Trending";

function Feed() {
  return (
    <>
      <Trending />

      <div className=" 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid grid-cols-1 gap-8">
        {blogPosts.map((posts) => {
          return (
            <>
              <div
                className={`${card.height} ${card.bg} ${card.Padding} ${card.round}`}
              >
                <Link to="singlepost">
                  {" "}
                  <button>Read More</button>
                </Link>
                <div className={`${heading.style}`}>{posts.text}</div>

                <div className={`${trend.flex} ${trend.tag}`}>
                  <p className={`${trend.tags}`}>#javascript</p>
                  <p className={`${trend.tags}`}>#react</p>
                  <p className={`${trend.tags}`}>+3 tags</p>
                </div>

                <div className="date">
                  <p>June {trend.day} • 16m read time</p>
                </div>

                <div>
                  <img
                    src={posts.img}
                    alt="laptop"
                    className={`${trend.img}  h-40`}
                  />
                </div>

                <div
                  className={`${trend.flex} ${trend.justifyBetween} ${trend.textLg} ${trend.oneRemPadding}`}
                >
                  <button className={`${trend.flex} ${trend.itemsCenter}`}>
                    <PiArrowFatUpBold />
                    10
                  </button>
                  <button className={`${trend.flex} ${trend.itemsCenter}`}>
                    <TbMessage2 />5
                  </button>
                  <button className={`${trend.flex} ${trend.itemsCenter}`}>
                    <PiLinkBold />
                  </button>
                </div>
              </div>
            </>
          );
        })}

        <div>
          <Link to="auth">Test Login </Link>
        </div>
      </div>
    </>
  );
}

export default Feed;
