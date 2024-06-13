import { useState } from "react";

function AddNewPost() {
  function renderDate(date) {
    const now = date;
    const year = now.getFullYear();
    const day = now.getDay();
    const days = now.getDate();
    return `${year}/${day}/${days}`;
  }

  const [format, setFormat] = useState(renderDate(new Date()));

  const handleCheck = () => {
    setFormat(() => {
      const newDate = new Date();
      const date = newDate.getDate();
      const year = newDate.getFullYear();
      return `today date is ${date} of ${year}`;
    });
  };

  return (
    <div>
      add new post
      <h1>{format}</h1>
      <button onClick={handleCheck}>check</button>
    </div>
  );
}

export default AddNewPost;
