import { IoIosKeypad } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { MdNotificationsNone } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";

// import microsoft from "../assets/microsoft.png";
// import copilot from "../assets/copilot.png";
import { navstyle } from "../Styles/Nav";

import { FaMicrosoft } from "react-icons/fa";
import { SiMicrosoftedge } from "react-icons/si";



function Nav() {
  return (
    <>
      <nav className={`${navstyle.nav}`}>
        <div className={`${navstyle.dispflex} ${navstyle.subnav}`}>
          <div className={`${navstyle.firstDiv}`}>
            <div className={`${navstyle.text2rem}`}>
              <IoIosKeypad />
            </div>
            {/* <img
              src={microsoft}
              alt=""
              className={`${navstyle.microsoftImg}`}
            /> */}
            <FaMicrosoft/>
            <p className={`${navstyle.microsoftStart} `}>Microsoft Start</p>
          </div>

          <div className={`${navstyle.second}`}>
            <div className={` ${navstyle.divSecond}  ${navstyle.dispflex}`}>
              <IoSearchOutline />
              <input
                type="text"
                placeholder="Search the web  "
                className={`${navstyle.searchInput}`}
              />
              {/* <img src={copilot} alt="" className={`${navstyle.copilot}`} /> */}
              <SiMicrosoftedge />
            </div>
          </div>

          <div className={`${navstyle.third} `}>
            <div></div>
            <MdNotificationsNone />
            <div />
            <div></div>
            <IoSettingsOutline />
            <div />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
