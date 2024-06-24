import { IoIosKeypad } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { MdNotificationsNone } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { FaMicrosoft } from "react-icons/fa";
import { SiMicrosoftedge } from "react-icons/si";
import { Link } from "react-router-dom";

import { navstyle } from "../Data/Data";

function Nav({ userId }) {
  console.log(userId);
  return (
    <>
      <nav className={`${navstyle.nav}`}>
        <div className={`${navstyle.dispflex} ${navstyle.subnav}`}>
          <div className={`${navstyle.firstDiv}`}>
            <div className={`${navstyle.text2rem}`}>
              <IoIosKeypad />
            </div>
            <Link to="/"><FaMicrosoft /></Link>
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
