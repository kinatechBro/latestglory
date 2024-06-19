import pix_one from "../assets/laptop.jpg";
import pix_two from "../assets/laptop1.webp";
import pix_three from "../assets/sm.jpg";
import pix_four from "../assets/computer.jpg";
import pix_five from "../assets/bg.jpg";
import pix_six from "../assets/field.jpg";

//utilityClass
const now = new Date();
export const Class = {
  flex: "flex",
  grid: "grid",
  roundedMd: "rounded-md",
  justifyBetween: "justify-between",
  itemsCenter: "items-center",
};
export const shorts = [
  {
    id: 1,
    text: "intresting heading",
    img: "src/assets/laptop1.webp",
  },
  {
    id: 2,
    text: "some intresting heading",
    img: "src/assets/laptop1.webp",
  },
  {
    id: 3,
    text: "another intresting heading",
    img: "src/assets/laptop1.webp",
  },
];

//====================feed.jsx start====================//
export const feed = {
  img: "bg-[#242424] rounded-xl h-32 w-full my-2",
  heading: "font-bold text-lg leading-6",
  readMore:
    "bg-white p-2 rounded-xl text-black font-[500] items-center gap-2 flex w-fit absolute right-4 top-4 cursor-pointer",
  ico: "flex items-center gap-2",
  tag: "bg-[#242424] rounded-md p-1 text-lg mr-2",
  card: "h-96 bg-[#333] rounded-md p-4 flex flex-col justify-between relative pt-14 cursor-pointer",
  responsive:
    "2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid grid-cols-1 gap-8",
  day: now.getDate(),
};

// tags
export const tags = {
  tag1: "#React",
  tag2: "#JavaScript",
  tag3: "+3 tags",
};

export const blogPosts = [
  {
    id: 1,
    text: "How To Create React Elements with JSX ",
    img: pix_one,
  },
  {
    id: 2,
    text: "API Design 101: My Best Practices for Building Great APIs ",
    img: pix_two,
  },
  {
    id: 3,
    text: "How To Convert a React Class-Based Component to a Functional Component ",
    img: pix_three,
  },
  {
    id: 4,
    text: "5 Free Machine Learning Courses from Top Universities ",
    img: pix_four,
  },
  {
    id: 5,
    text: "Boost Productivity & Quality: Essential VS Code Extensions ",
    img: pix_five,
  },
  {
    id: 6,
    text: "Best Icon Libraries for a Dev in 2024 ",
    img: pix_six,
  },
  {
    id: 7,
    text: "Best Icon Libraries for a Dev in 2024 ",
    img: pix_one,
  },
  {
    id: 8,
    text: "Best Icon Libraries for a Dev in 2024 ",
    img: pix_two,
  },
  {
    id: 9,
    text: "Best Icon Libraries for a Dev in 2024 ",
    img: pix_three,
  },
];

//====================feed.jsx end====================//

//====================nav.jsx start====================//
export const navstyle = {
  dispflex: "flex",
  nav: "bg-red-500- m-[0_auto] flex justify-center text-white p-2",
  subnav:
    "relative  w-11/12 justify-between text-2xl md:text-3xl md:items-center md:w-11/12 place-content-center ",
  firstDiv: "flex items-center gap-2 w-fit",
  text2rem: "text-[2.2rem]",
  microsoftImg: "hidden md:flex w-7 h-7",
  microsoftStart: "hidden md:flex text-lg font-bold",
  second: "absolute -bottom-16 w-full md:static  md:w-3/5 ",
  divSecond: "px-5  gap-5 items-center rounded-full bg-[#333] w-full",
  searchInput: "bg-[#333] w-full",
  copilot: "w-10 h-10",
  third: "flex gap-2 items-center",
};
//====================nav.jsx end====================//

// ====================singlePosts.jsx  start====================//
export const singlePosts = {
  white: "text-white",
  nav: "bg-[#201f1f] h-20 mb-2",
  pageHeadingStyle: "",
  navContent: "Single Post",
  navContentStyle: "text-3xl font-bold p-4",
};
export const paragraphs = {
  postHeading: "text-3xl font-bold",
  imgContainer: "h-80 bg-[#3d3d3d] rounded-xl my-6",
  imgStyle: "h-80 rounded-xl",
  subhead: "py-4 font-bold text-lg",
  style: "grid gap-5 text-justify",
  subheadText: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  postHeadingText: "Lorem ipsum dolor sit amet",
  paragraphsText:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta placeat dolorem a repellat, modi quae. Atque odit aspernatur vero explicabo, libero obcaecati voluptatem ab expedita provident ipsum accusamus quidem commodi.",
};
export const sections = {
  hidden: "hidden",
  grid: "md:grid ",
  pt16: "pt-16",
  px16: "px-16",
  style: "bg-[#201f1f] rounded-md h-auto p-2",
};
export const postsTags = {
  style:
    "p-4 bg-[#333] mb-2 rounded-r-full cursor-pointer hover:underline w-3/4 font-bold",
};

export const laptop = pix_two;

// ====================singlePosts.jsx  end====================//
const postCategories = [{ id: 1, categoris: "Sport" }];
