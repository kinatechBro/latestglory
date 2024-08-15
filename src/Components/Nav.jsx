import { IoSearchOutline } from "react-icons/io5";
import { SiMicrosoftedge } from "react-icons/si";
import { IoIosKeypad } from "react-icons/io";
import { FaMicrosoft } from "react-icons/fa";
import { navstyle } from "../Data/Data";
import { Link } from "react-router-dom";
const { container, iconContainer, searchContainer, searchBarIcon, searchInput } = navstyle;

function Nav() {
  return (
    <>
      <header>
        <nav>
          <div className={container}>
            <div className={iconContainer}>
              <Link>
                <IoIosKeypad />
              </Link>
              <Link to="/">
                <FaMicrosoft />
              </Link>
            </div>
            <div className="">
              <div className={searchContainer}>
                <IoSearchOutline className={searchBarIcon} />
                <input type="text" className={searchInput} />
                <SiMicrosoftedge className={searchBarIcon} />
              </div>
            </div>
            <div className=""> </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Nav;
