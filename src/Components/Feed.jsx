
import house from "../assets/sm.jpg"
import field from "../assets/field.jpg"
import jordan from "../assets/jordan.jpg"
import computer from "../assets/computer.jpg"
import bridge from "../assets/bridge.jpg"



function Feed() {
  return (
    <>
      <div className=" 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid grid-cols-1 gap-2  ">
        <div className="w-auto bg-[#333] rounded-md h-80 sm:col-span-2">
          <img src={field} alt="field" className={`size-80 w-full rounded-md`} />
        </div>
        <div className="w-auto bg-[#333] rounded-md h-80"></div>
        <div className="w-auto bg-[#333] rounded-md h-80">nth</div>
        <div className="w-auto bg-[#333] rounded-md h-80">nth</div>
        <div className="w-auto bg-[#333] rounded-md h-80">nth</div>
      </div>
    </>
  );
}

export default Feed;
