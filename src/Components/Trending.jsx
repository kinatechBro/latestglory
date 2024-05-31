import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";


import { TbMessage2 } from "react-icons/tb";
import { PiBookmarkSimpleBold } from "react-icons/pi";
import { PiLinkBold } from "react-icons/pi";
import { FaLink } from 'react-icons/fa';
import { PiArrowFatUpBold } from "react-icons/pi";
import { HiExternalLink } from "react-icons/hi";
import { HiOutlineDotsVertical } from "react-icons/hi";


import bg from "../assets/bg.jpg"
import bridge from "../assets/bridge.jpg"
import computer from "../assets/computer.jpg"
import jordan from "../assets/jordan.jpg"
import field from "../assets/field.jpg"
import house from "../assets/sm.jpg"

import { trending } from "../Styles/Trending";

function Trending() {
  return (
    <div>
      <OwlCarousel className="owl-theme" loop margin={10} nav>
        <div className="item w-auto bg-[#333] rounded-md h-96 p-2">
          <h3 className={`${trending.headings}`}>How To Create React Elements with JSX</h3>
          <div className={`${trending.flex} ${trending.tag}`}>
            <p className={`${trending.tags}`}>#javascript</p>
            <p className={`${trending.tags}`}>#react</p>
            <p className={`${trending.tags}`}>+3 tags</p>
          </div>
          <div><p>May {trending.day} • 19m read time</p></div>
          <img src={field} alt="bridge" className={`${trending.img}`} />

          <div className={`${trending.icons}`}>
            <div className={`flex items-center gap-2`}><PiArrowFatUpBold /> <p className={`text-base`}>{trending.randomNumber1}</p></div>
            <div className={`flex items-center gap-2`}> <TbMessage2 /> <p className={`text-base`}>{trending.randomNumber2}</p></div>
            <div className={`flex items-center gap-2`}><PiLinkBold /></div>
          </div>
        </div>

        <div className="item w-auto bg-[#333] rounded-md h-80">
          {/* <img src={computer} alt="" className={`size-80 w-full rounded-md`} /> */}
        </div>
        <div className="item w-auto bg-[#333] rounded-md h-80">
          {/* <img src={jordan} alt="" className={`size-80 w-full rounded-md`} /> */}
        </div>
        <div className="item w-auto bg-[#333] rounded-md h-80">

          {/* <img src={bg} alt="" className={`size-80 w-full rounded-md`} /> */}
        </div>
        <div className="item w-auto bg-[#333] rounded-md h-80">

          {/* <img src={house} alt="" className={`size-80 w-full rounded-md`} /> */}
        </div>
        <div className="item w-auto bg-[#333] rounded-md h-80">
          {/* <img src={field} alt="" className={`size-80 w-full rounded-md`} /> */}
        </div>

        
      </OwlCarousel>

    </div>
  );
}

export default Trending;
