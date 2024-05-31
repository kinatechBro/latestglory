
import house from "../assets/sm.jpg"
import field from "../assets/field.jpg"
import jordan from "../assets/jordan.jpg"
import computer from "../assets/computer.jpg"
import bridge from "../assets/bridge.jpg"

import Trending from "./Trending"



function Feed() {
  return (
    <>
        <Trending/>
      <div className=" 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid grid-cols-1 gap-2">
        <div className="w-auto bg-[#333] rounded-md h-80"></div>
        <div className="w-auto bg-[#333] rounded-md h-80"></div>
        <div className="w-auto bg-[#333] rounded-md h-80"></div>
        <div className="w-auto bg-[#333] rounded-md h-80"></div>
        <div className="w-auto bg-[#333] rounded-md h-80"></div>
        <div className="w-auto bg-[#333] rounded-md h-80"></div>
      </div>
    </>
  );
}

export default Feed;
