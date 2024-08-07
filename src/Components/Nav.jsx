import { IoIosKeypad } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { FaMicrosoft } from "react-icons/fa";
import { SiMicrosoftedge } from "react-icons/si";
import { Link } from "react-router-dom";

import { navstyle } from "../Data/Data";

function Nav() {
  return (
    <>
      <header>
        <nav className={`${navstyle.nav}`}>
          <div className={`${navstyle.dispflex} ${navstyle.subnav}`}>
            <div className={`${navstyle.firstDiv}`}>
              <div className={`${navstyle.text2rem}`}>
                <IoIosKeypad />
              </div>
              <Link to="/">
                <FaMicrosoft />
              </Link>
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

            {/* <div className={`${navstyle.third} text-lg fo `}>
              <div className="bg-[#242424] p-2 rounded-full">
                <Link to="auth">Login</Link>
              </div>
              <div className="bg-[#242424] p-2 rounded-full">
                <Link to="auth">Sign Up</Link>
              </div>
            </div> */}
          </div>
        </nav>
      </header>
    </>
  );
}

export default Nav;
