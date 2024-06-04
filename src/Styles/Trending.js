
import pix_one from "../assets/laptop.jpg";
import pix_two from "../assets/laptop1.webp";
import pix_three from "../assets/sm.jpg";
import pix_four from "../assets/computer.jpg";
import pix_five from "../assets/bg.jpg";
import pix_six from "../assets/field.jpg";

const now = new Date();

export const trend = {
  flex: "flex",
  itemsCenter: "items-center",
  justifyBetween: "justify-between",
  textLg: "text-lg",
  oneRemPadding: "px-4",

  headings: "xl:text-[1.3rem] leading-6  font-bold text-lg ",
  day: now.getDate(),
  tags: "border-[#4d4d4d] border bg-[#242424] rounded-lg p-1 width-fit cursor-pointer",
  tag: "gap-2 text-slate-300 text-sm ",
  img: "size-80 w-full rounded-xl h-1/2 bg-[#2c2c2c] my-2",
  icons: "justify-between flex text-2xl text-slate-300 px-5",
  ico: "flex items-center gap-2",
  h3: "h-10",
};
//images for the slider
export const images = {
  field: "src/assets/field.jpg",
  house: "src/assets/sm.jpg",
  bridge: "src/assets/bridge.jpg",
  computer: "src/assets/computer.jpg",
  bg: "src/assets/bg.jpg",
  laptop: "src/assets/laptop1.webp",
  laptop2: "src/assets/laptop.jpg",
};

export const heading = {
  one: "How To Create React Elements with JSX ", //234567890-sdfghjkl asdfghjkl;qwertyuiop[asdfvgbnm ertyuio,.
  two: "API Design 101: My Best Practices for Building Great APIs",
  three:
    "How To Convert a React Class-Based Component to a Functional Component",
  style: "xl:text-2xl text-lg font-bold h-[6.5rem]",
};

export const card = {
  height: "h-96",
  bg: "bg-[#333]",
  round: "rounded-md",
  Padding: "p-2",
};

function windoWidth() {
  const width = window.innerWidth;
  let num = 3;
  if (width <= 800) {
    num = 2;
  }
  return num;
}

export const itemNumber = windoWidth();

console.log(itemNumber);
console.log(window.innerWidth);

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
    text: "How To Create React Elements with JSX ",
    img: pix_four,
  },
  {
    id: 5,
    text: "How To Create React Elements with JSX ",
    img: pix_five,
  },
  {
    id: 6,
    text: "How To Create React Elements with JSX ",
    img: pix_six,
  },
];
