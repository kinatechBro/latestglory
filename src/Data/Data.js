import pix_one from "../assets/laptop.jpg";
import pix_two from "../assets/laptop1.webp";
import pix_three from "../assets/sm.jpg";
import pix_four from "../assets/computer.jpg";
import pix_five from "../assets/bg.jpg";
import pix_six from "../assets/field.jpg";

const now = new Date();

export const data = {};

export const Class = {
  white: "text-white",
  flex: "flex",
  grid: "grid",
  roundedMd: "rounded-md",
  justifyBetween: "justify-between",
  itemsCenter: "items-center",
  hidden: "hidden",
};
export const latestPosts = [
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

//====================Blog.jsx start====================//
export const blog = {
  container:
    "w-11/12 md:w-[90%] text-white m-auto bg-[#242424] p-4 rounded-md md:px-8 my-2",
  subNav: "flex items-center justify-between gap-8 pb-4",
  category:
    "flex gap-4 font-bold items-center flex-nowrap overflow-hidden container",
  categoryTextStyle: "font-bold items-center",
  categoryActive:
    "text-blue-400 border-[#4d4d4d] border bg-[#3a3a3a] rounded-xl p-2 cursor-pointer buttons",
  fullPage: "border rounded-full p-2 w-60",
  mdFlex: "md:flex",
};
export const categories = [
  {
    id: 1,
    category: "Discover",
    route: "discover",
  },
  {
    id: 2,
    category: "Sports",
  },
  {
    id: 3,
    category: "Play",
  },
  {
    id: 4,
    category: "Money",
  },
  {
    id: 5,
    category: "Gaming",
  },
  {
    id: 6,
    category: "Weather",
  },
  {
    id: 7,
    category: "Watch",
  },
  {
    id: 8,
    category: "Learning",
  },
  {
    id: 9,
    category: "Health",
  },
  {
    id: 10,
    category: "Travel",
  },
  {
    id: 11,
    category: "Traffic",
  },
];
//====================Blog.jsx stop====================//

//====================feed.jsx start====================//
export const feed = {
  img: "bg-[#242424] rounded-xl  w-full my-2 h-48 object-cover",
  heading: "font-bold text-lg leading-6 text-white",
  readMore:
    "bg-slate-100 p-1  shadow-2xl rounded-md text-black font-medium items-center gap-2 flex w-fit absolute right-2 top-2 md:top-4 md:right-4 cursor-pointer",
  ico: "flex items-center gap-2",
  tag: "  flex items-center gap-2 mt-4",
  card: "h-full bg-[#333] rounded-lg p-4 flex flex-col text-white justify-between relative pt-10 cursor-pointer",
  // responsive:
  //   "2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid grid-cols-1 gap-8",
  responsive: "grid gap-8",
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
  container:
    "grid text-white sm:grid-cols-[1fr_50%_1fr] py-1 gap-2 px-4 items-center",
  iconContainer:
    "flex items-center  justify-between gap-4 md:justify-center  cursor-pointer",
  searchContainer:
    "search flex items-center gap-2 bg-[#333] rounded-full p-1 px-2 relative",
  searchBarIcon: "text-2xl cursor-pointer",
  searchInput: "bg-transparent w-full outline-none border-none",
};

//====================nav.jsx end====================//

// ====================singlePosts.jsx  start====================//
export const singlePosts = {
  white: "text-white",
  nav: "bg-[#201f1f] h-20 mb-2",
  pageHeadingStyle: "",
  navContent: "Single Post",
  navContentStyle: "text-3xl font-bold p-4",
  sectionsGrid:
    "grid gap-2  md:grid-cols-[70%_auto] xl:grid-cols-[20%_50%_auto] grid-cols-1 w-full",
  sectionLeft: "bg-[#201f1f] h-auto hidden xl:grid rounded-md",
};
export const paragraphs = {
  postHeading: "text-3xl font-bold",
  imgContainer: "h-96 bg-[#3d3d3d] rounded-xl my-6 object-fill w-full",
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
  style: "bg-[#201f1f] h-auto p-2",
};
export const postsTags = {
  style:
    "p-4 bg-[#333] mb-2 rounded-r-full cursor-pointer hover:underline w-3/4 font-bold",
  latestPostStyle: "flex items-center gap-2 pb-2",
  latestPostLinks:
    "rounded-md bg-[#333] p-1 h-40 flex justify-between flex-col",
};

export const gradientColor = {
  gradient: " border-gradient-red-orange border-2",
  bgGradient: "bg-gradient-to-br from-purple-700 via-indigo-800 to-blue-900",
};
export const laptop = pix_two;

// ====================singlePosts.jsx  end====================//

// ====================Auth.jsx  start====================//
export const authStyle = {
  body: "h-screen bg-black text-white flex justify-center items-center",
  card: "bg-[#242424] w-11/12 sm:w-1/2 rounded-xl p-8 lg:w-2/6",
  heading: "text-2xl font-bold text-center",
  input: "p-2 outline-none bg-transparent w-full",
  inputBorder: "border-b-2 ",
  flexCol: "flex flex-col",
  itemsCenter: "items-center",
  gap: "gap-4",
  bgWhite: "bg-white",
  form: " flex flex-col gap-4 py-4 w-full",
  signInSignUpBtnBig: "text-black font-bold p-2 rounded-md w-full my-2",
  signInSignUpBtnSmall:
    "bg-white p-2 rounded-md text-black font-semibold cursor-pointer",
  foot: "items-center justify-between flex-col flex gap-2",
};
// ====================Auth.jsx  end====================//

// ====================AddEditBlog.jsx  start====================//
export const createBlog = {
  parentContainer: "bg-[#242424] py-16",
  flex: "flex",
  container:
    "w-4/5 text-[#333] py-16 shadow-lg bg-neutral-200 p-8 rounded-md m-[0_auto]",
  heading: "text-4xl font-bold",
  titleInput:
    "w-full bg-transparent h-16 border-neutral-700 text-2xl border-2 rounded-md my-2",
  flexGap: "flex-col flex gap-4",
  submitBtn: "bg-white rounded-lg p-4 text-black",
  textarea:
    "w-full h-60 border-none outline-none rounded-md p-2 text-lg text-black resize-none",
  radioOption: "flex gap-2 items-center",
  radio: "flex gap-4",

  fileInputSpan: "font-semibold",
  fileInputDiv: "flex items-center justify-center w-full",
  fileInputSvg: "flex flex-col items-center justify-center pt-5 pb-6",
  fileInputFileType: "text-xs text-gray-500 dark:text-gray-400",
  fileInputText: "mb-2 text-sm text-gray-500 dark:text-gray-400",
  fileInputHidden: "hidden",
  fileInputLabel:
    "flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-[#242424] hover:bg-[#333] dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-[#333]",
};
// ====================AddEditBlog.jsx  end====================//
