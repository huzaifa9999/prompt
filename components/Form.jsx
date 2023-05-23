
// "use client"
import Link from "next/link";
// import { useState } from "react";
const Form = ({ type, post, setPost, submitting, handleSubmit}) => {
  
  
  // const [selectedImage, setSelectedImage] = useState();


  // const handleChange = event => {
  //   setSelectedImage(event.target.files[0]);
  // }

  // const handleImageUpload = () => {
  //   if (!selectedImage) { return; }
  //   const formData = new FormData();
  //   formData.append('image', selectedImage);

  
  
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Post</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} and provide innovative Promtps to the world
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        {/* <input
        onChange={handleChange}
        accept=".jpg, .png, .jpeg"
        className="fileInput mb-2"
        type="file">
      </input>
      <div>
        <button
         onClick={handleImageUpload}
         disabled={!selectedImage}
         className="btn btn-primary mb-2">
          Upload
        </button>
        </div> */}

        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            your prompt
          </span>
          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            required
            placeholder="your prompt"
            className="form_textarea"
          />
          
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            TAG{` `}
            <span className="font-normal">(#product, #webdev)</span>
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            required
            placeholder="#tag"
            className="form_input"
          />
          
        </label>
        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-grey-500 text-sm">
            {" "}
            cancel
          </Link>
        </div>
        <button
          type="submit"
          disabled={submitting}
          className="px-10 py=2 text-sm bg-[#E2DCC8] rounded-full text-black text-bold 
"
        >
          {submitting ? `${type}...` : type}
        </button>
      </form>
    </section>
  );
};

export default Form;
