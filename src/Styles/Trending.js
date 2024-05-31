const now = new Date();
export const trending = {
  flex: "flex",
  headings: "text-2xl font-bold ",
  day: now.getDate(),
  tags: "border-[#4d4d4d] border bg-[#242424] rounded-lg p-1 width-fit cursor-pointer",
  tag: "gap-2 text-slate-300 text-sm py-2",
  img: "size-80 w-full rounded-xl h-1/2 bg-[#2c2c2c] my-2",
  icons: "justify-between flex text-2xl text-slate-300 px-5",
  randomNumber1: number(),
  randomNumber2: number1(),
};

function number() {
  const randomNum = Math.random() * 100;
  const whole = parseInt(randomNum);
  console.log(whole);
  return whole;
}
function number1() {
  const randomNum = Math.random() * 50;
  const whole = parseInt(randomNum);
  console.log(whole);
  return whole;
}
