import Feed from "../Components/Feed";
function Blog() {
  return (
    <>
      <div
        className={`text-white md:rounded-xl rounded-[10px_10px_0_0] h-auto bg-[#242424] mx-0 xl:mx-40 mt-16 md:mt-0 px-2 py-4 md:px-4`}
      >
        <div className={`flex items-center justify-between gap-8 pb-4 `}>
          <div
            className={`flex gap-4 font-bold items-center  flex-nowrap overflow-hidden  container`}
          >
            <button
              className={`text-blue-400 border-[#4d4d4d] border bg-[#3a3a3a] rounded-xl p-2 cursor-pointer buttons`}
            >
              Discover
            </button>
            <button>Sports</button>
            <button>Play</button>
            <button>Money</button>
            <button>Gaming</button>
            <button>Weather</button>
            <button>Watch</button>
            <button>Learning</button>
            <button>Health</button>
            <button>Travel</button>
            <button>Traffic</button>
            <div className={`placeholder cursor-pointer`}>...</div>
          </div>
          <div className={`hidden md:flex`}>
            <div className={`flex`}>
              <p className={`border rounded-full p-2 w-60`}>Full Page</p>
            </div>
          </div>
        </div>
        <Feed />
      </div>
    </>
  );
}

export default Blog;
