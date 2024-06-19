import {
  singlePosts,
  postsTags,
  sections,
  paragraphs,
  shorts,
  laptop,
} from "../Data/Data";

function SinglePost() {
  return (
    <>
      <div>
        <div className={`${singlePosts.white}`}>
          <nav className={`${singlePosts.nav}`}>
            <h1 className={`${singlePosts.navContentStyle}`}>
              {singlePosts.navContent}
            </h1>
          </nav>

          <div
            className={`grid gap-2  md:grid-cols-[70%_auto] xl:grid-cols-[20%_50%_auto] grid-cols-1 w-full`}
          >
            <div
              className={`bg-[#201f1f] h-auto hidden xl:grid rounded-md`}
            ></div>

            <div className={` ${sections.style} ${sections.px16} px-2 py-4 `}>
              <h1 className={`${paragraphs.postHeading}`}>
                {paragraphs.postHeadingText}
              </h1>
              <div className={`${paragraphs.imgContainer}`}>
                <img src={laptop} alt="" className={`${paragraphs.imgStyle}`} />
              </div>

              <h3 className={`${paragraphs.subhead}`}>
                {paragraphs.subheadText}
              </h3>

              <div className={`${paragraphs.style}`}>
                <p>{paragraphs.paragraphsText}</p>
                <p>{paragraphs.paragraphsText}</p>
                <p>{paragraphs.paragraphsText}</p>
              </div>
            </div>
            <div
              className={`${sections.style} ${sections.hidden} ${sections.grid} `}
            >
              <div className={`${sections.pt16}`}>
                <div className={`${postsTags.style}`}>Latest posts</div>

                <div className={`flex items-center gap-2 pb-2`}>
                  {shorts.map((posts) => {
                    return (
                      <div key={posts.id}>
                        <div
                          className={`rounded-md bg-[#333] p-1 h-40 flex justify-between flex-col`}
                        >
                          <h3 className={`font-[500] text-base leading-5`}>
                            {posts.text}
                          </h3>
                          <img
                            src={posts.img}
                            alt=""
                            className="rounded-md bg-[#414141]"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className={`${postsTags.style}`}>Popular posts</div>

                <div className={`flex items-center gap-2`}>
                  {shorts.map((posts) => {
                    return (
                      <div key={posts.id}>
                        <div
                          className={`rounded-md bg-[#333] p-1 h-40 flex justify-between flex-col`}
                        >
                          <h3 className={`font-[500] text-base leading-5`}>
                            {posts.text}
                          </h3>
                          <img
                            src={posts.img}
                            alt=""
                            className="rounded-md bg-[#414141]"
                          />
                        </div>
                      </div>
                    );
                  })}
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
