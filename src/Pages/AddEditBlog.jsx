import { useState, useEffect } from "react";
import { categories,  createBlog } from "../Data/Data"

const initalState = {
  title: "",
  category: "",
  tags: [],
  description: "",
  trenidng: "No",
};



function AddEditBlog() {
  const [form, setForm] = useState(initalState);
  const [file, setFile] = useState(null);
  const { title, tags, category, trenidng, description } = form;

  const handleChange = (e) => { };
  const handleTrending = () => { };
  const onCategryChange = () => { };
  return (
    <div className={`${createBlog.parentContainer}`}>
      <div className={`${createBlog.container}`}>
        <h1 className={`${createBlog.heading}`}>Create Blogposts </h1>

        <div>
          <form>
            <div>
              <input
                type="text"
                placeholder="Blog title"
                name="title"
                value={title}
                onChange={handleChange}
                className={`${createBlog.titleInput}`}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="title"
                name="title"
                value={title}
                onChange={handleChange}
                className={`${createBlog.titleInput}`}

              />
            </div>

            <div className={`${createBlog.flexGap}`}>
              <p className="text-2xl"> is it a trending post </p>
              <div className={`${createBlog.radio}`}>
                <div className={`${createBlog.radioOption}`}>
                  <input
                    type="radio"
                    name="radioOption"
                    value="yes"
                    checked={trenidng === "yes"}
                    onChange={handleTrending}
                  />
                  <label htmlFor="radioOption"> yes</label>
                </div>

                <div className={`${createBlog.radioOption}`}>
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
                <select value={category} onChange={onCategryChange} className="w-80 p-2 rounded-md border-none outline-none text-black" >
                  <option>Select Category</option>
                  {categories.map((option, index) => (
                    <option value={option || ""} key={index}>
                      {option.category}
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
                  className={`${createBlog.textarea}`}
                ></textarea>
              </div>

              <div>
                {/* <input
                  type="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  className="border-2 border-transparent bg-transparent "
                /> */}
                
                <div className={`${createBlog.fileInputDiv}`}>
                  <label for="dropzone-file" className={`${createBlog.fileInputLabel}`}>

                    <div class={`${createBlog.fileInputSvg}`}>
                      
                      <p className={`${createBlog.fileInputText}`}><span className={`${createBlog.fileInputSpan}`}>Click to upload</span> or drag and drop</p>
                      <p className={`${createBlog.fileInputFileType}`}>SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                    </div>
                    <input id="dropzone-file" type="file" className={`${createBlog.fileInputHidden}`} onChange={(e) => setFile(e.target.files[0])} />
                  </label>
                </div>

              </div>

              <div>
                <button type="submit" className={`${createBlog.submitBtn}`}>Add Blog</button>
              </div>

            </div>
          </form>
        </div>
        
      </div>
    </div>
  );
}

export default AddEditBlog;
