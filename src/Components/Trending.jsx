import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import { TbMessage2 } from "react-icons/tb";
import { PiLinkBold } from "react-icons/pi";
import { PiArrowFatUpBold } from "react-icons/pi";
import { HiOutlineExternalLink } from "react-icons/hi";

import { Link } from "react-router-dom";

import { tags, blogPosts, Class, feed } from "../Data/Data";

function Trending() {
  return (
    <div>
      <OwlCarousel className={`owl-theme `} items={3} loop margin={30} nav>
        {blogPosts.map((posts) => {
          return (
            <>
              <div className={`${feed.card}`}>
                <Link to="singlePosts">
                  <div className={`${feed.readMore}`}>
                    <button>read more</button>
                    <HiOutlineExternalLink />
                  </div>
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
      </OwlCarousel>
    </div>
  );
}

export default Trending;