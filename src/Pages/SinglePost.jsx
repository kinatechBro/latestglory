

import { singlePosts, postsTags, sections, paragraphs } from "../Styles/Style"
import { images } from "../Styles/Trending";

function SinglePost() {
  return (
    <>
      <div>
        <div className={`${singlePosts.white}`}>
          <div className={`bg-[#201f1f] h-20 mb-2 `}>
            <h1 className={`text-3xl font-bold p-4`}>Single Post</h1>

            </div>
          <div className={`grid gap-2  md:grid-cols-[70%_auto] xl:grid-cols-[15%_60%_auto] grid-cols-1 w-full ` }>
            <div className={`bg-[#201f1f] h-auto hidden xl:grid rounded-md`}>
            </div>

            <div className={` ${sections.style} ${sections.px16} py-4 `}>
              <h1 className={`${paragraphs.postHeading}`}>Lorem ipsum dolor sit amet</h1>
              <div className={`${paragraphs.imgContainer}`}>
                <img src={images.laptop} alt="" className={`${paragraphs.imgStyle}`} />
              </div>

              <h3 className={`${paragraphs.subhead}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>

              <div className={`${paragraphs.style}`}>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta placeat dolorem a repellat, modi quae. Atque odit aspernatur vero explicabo, libero obcaecati voluptatem ab expedita provident ipsum accusamus quidem commodi.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta placeat dolorem a repellat, modi quae. Atque odit aspernatur vero explicabo, libero obcaecati voluptatem ab expedita provident ipsum accusamus quidem commodi.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta placeat dolorem a repellat, modi quae. Atque odit aspernatur vero explicabo, libero obcaecati voluptatem ab expedita provident ipsum accusamus quidem commodi.</p>
              </div>
            </div>
            <div className={`${sections.style} ${sections.hidden} ${sections.grid} `}>
              <div className={`${sections.pt16}`}>
                <div className={`${postsTags.style}`}>Latest posts</div>
                <div className={`${postsTags.style}`}>Popular posts</div>
                <div className={`${postsTags.style}`}>Sports </div>
                <div className={`${postsTags.style}`}>Learning </div>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </>
  );
}

export default SinglePost;