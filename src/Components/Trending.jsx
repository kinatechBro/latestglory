import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import { TbMessage2 } from "react-icons/tb";
import { PiLinkBold } from "react-icons/pi";
import { PiArrowFatUpBold } from "react-icons/pi";

import { trend, heading, card, itemNumber, blogPosts, } from "../Styles/Trending";

function Trending() {

  return (
    <div>
      <OwlCarousel className={`owl-theme `} items={itemNumber} loop margin={30} nav>
        {
          blogPosts.map((posts) => {
            return (
              <>
                <div className={`${card.height} ${card.bg} ${card.Padding} ${card.round}`}>


                  <div className={`${heading.style}`}>{posts.text}</div>

                  <div className={`${trend.flex} ${trend.tag}`}>
                    <p className={`${trend.tags}`}>#javascript</p>
                    <p className={`${trend.tags}`}>#react</p>
                    <p className={`${trend.tags}`}>+3 tags</p>
                  </div>

                  <div className="date"><p>June {trend.day} • 16m read time</p></div>

                  <div>
                    <img src={posts.img} alt="laptop" className={`${trend.img}  h-40`} />
                  </div>

                  <div className={`${trend.flex} ${trend.justifyBetween} ${trend.textLg} ${trend.oneRemPadding}`}>
                    <button className={`${trend.flex} ${trend.itemsCenter}`}><PiArrowFatUpBold />10</button>
                    <button className={`${trend.flex} ${trend.itemsCenter}`}><TbMessage2 />5</button>
                    <button className={`${trend.flex} ${trend.itemsCenter}`}><PiLinkBold /></button>
                  </div>
                </div>
              </>
            )
          })
        }
      </OwlCarousel>

    </div>
  );
}

export default Trending;
