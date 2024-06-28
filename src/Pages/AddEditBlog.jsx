import { useState, useEffect } from "react";

const initalState = {
  title: "",
  category: "",
  tags: [],
  description: "",
  trenidng: "No",
};

const categories = [
  "musice",
  "scholarship",
  "Tech",
  "Blockchain",
  "money",
  "AI Tools",
];

function AddEditBlog() {
  const [form, setForm] = useState(initalState);
  const [file, setFile] = useState(null);
  const { title, tags, category, trenidng, description } = form;

  const handleChange = (e) => {};
  const handleTrending = () => {};
  const onCategryChange = () => {};
  return (
    <div>
      <div>
        <h1>create Blog</h1>

        <div>
          <form>
            <div>
              <input
                type="text"
                placeholder="title"
                name="title"
                value={title}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="title"
                name="title"
                value={title}
                onChange={handleChange}
              />
            </div>

            <div>
              <p> is it trending post </p>
              <div>
                <div>
                  <input
                    type="radio"
                    name="radioOption"
                    value="yes"
                    checked={trenidng === "yes"}
                    onChange={handleTrending}
                  />
                  <label htmlFor="radioOption"> yes</label>
                </div>

                <div>
                  <input
                    type="radio"
                    name="radioOption"
                    value="no"
                    checked={trenidng === "no"}
                    onChange={handleTrending}
                  />
                  <label htmlFor="radioOption">no</label>
                </div>
              </div>

              <div>
                <select value={category} onChange={onCategryChange}>
                  <option>Select Category</option>
                  {categories.map((option, index) => (
                    <option value={option || ""} key={index}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <textarea
                  name="decription"
                  value={description}
                  placeholder="decription"
                  onChange={handleChange}
                ></textarea>
              </div>
              <div>
                <input
                  type="file"
                  value={file}
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>
              <div>
                <button type="submit">Add Blog</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddEditBlog;
