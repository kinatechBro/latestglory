import { singlePosts, postsTags, sections, paragraphs, latestPosts, laptop,feed,Class} from "../Data/Data"

import { TbMessage2 } from "react-icons/tb";
import { PiLinkBold } from "react-icons/pi";
import { PiArrowFatUpBold } from "react-icons/pi";

function SinglePost() {
  return (
    <>
      <div>
        <div className={`${singlePosts.white}`}>

          <nav className={`${singlePosts.nav}`}>
            <h1 className={`${singlePosts.navContentStyle}`}>{singlePosts.navContent}</h1>
          </nav>

          <div className={`${singlePosts.sectionsGrid}`}>
            <div className={`${singlePosts.sectionLeft}`}>
            </div>

            <div className={` ${sections.style} ${sections.px16} px-2 py-4 rounded-t-md`}>
              <h1 className={`${paragraphs.postHeading}`}>{paragraphs.postHeadingText}</h1>
              <div className={`${paragraphs.imgContainer}`}>
                <img src={laptop} alt="" className={`${paragraphs.imgStyle}`} />
              </div>

              <h3 className={`${paragraphs.subhead}`}>{paragraphs.subheadText}</h3>

              <div className={`${paragraphs.style}`}>
                <p>{paragraphs.paragraphsText}</p>
                <p>{paragraphs.paragraphsText}</p>
                <p>{paragraphs.paragraphsText}</p>
              </div>

              <div className={`${feed.ico} ${Class.justifyBetween} bg-[#252525] rounded-lg p-2 cursor-pointer my-4`}>
                <div className={`${feed.ico}`}><PiArrowFatUpBold fontSize={22} fontWeight={700} />15</div>
                <div className={`${feed.ico}`}><TbMessage2 fontSize={22} fontWeight={700} />15</div>
                <div className={`${feed.ico}`}><PiLinkBold fontSize={22} fontWeight={700} /></div>
              </div>


              <div className="bg-[#252525] rounded-lg p-1">
                <h3 className={`${paragraphs.subhead} py-2`}>Similar Posts</h3>
                <div className={`${postsTags.latestPostStyle} cursor-pointer`}>
                  {
                    latestPosts.map((posts) => {
                      return (
                        <div key={posts.id}>
                          <div className={`${postsTags.latestPostLinks} h-52`}>
                            <h3 className={`font-[500] text-lg leading-5`}>{posts.text}</h3>
                            <img src={posts.img} alt="" className="rounded-md bg-[#414141]" />
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
             </div>
            </div>

            <div className={`${sections.style} ${sections.hidden} ${sections.grid} `}>
              <div className={`${sections.pt16}`}>

                <div className={`${postsTags.style}`}>Latest posts</div>

                <div className={`${postsTags.latestPostStyle} cursor-pointer`}>
                  {
                    latestPosts.map((posts) => {
                      return (
                        <div key={posts.id}>
                          <div className={`${postsTags.latestPostLinks}`}>
                            <h3 className={`font-[500] text-base leading-5`}>{posts.text}</h3>
                            <img src={posts.img} alt="" className="rounded-md bg-[#414141]" />
                          </div>
                        </div>
                      )
                    })
                  } 
                </div>

                <div className={`${postsTags.style}`}>Popular posts</div>

                <div className={`${postsTags.latestPostStyle} cursor-pointer`}>
                  {
                    latestPosts.map((posts) => {
                      return (
                        <div key={posts.id}>
                          <div className={`${postsTags.latestPostLinks}`}>
                            <h3 className={`font-[500] text-base leading-5`}>{posts.text}</h3>
                            <img src={posts.img} alt="" className="rounded-md bg-[#414141]" />
                          </div>
                        </div>
                      )
                    })
                  }
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default SinglePost;