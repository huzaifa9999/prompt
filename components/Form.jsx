import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit,uploadImage }) => {
 

  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Post</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} and share amazihng promptsd with the world,hue hue hue
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >

      {/* <div>
        <button  component="label"
                sx={{
                  width: "fit-content",
                  color: "#2ed480",
                  textTransform: "capitalize",
                  fontSize: 16,
                }}>
                upload
 <input
              type="file"
              name="image"
              placeholder="Image"
              //   autoComplete="off"
              onChange={uploadImage}
            // value={image}
            />
        </button>
      </div> */}

      {/* <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
           image
            <span className="font-normal">(upload image)</span>
          </span>
          <input
            value={post.image}
            type="file"
            onChange={(e) => uploadImage()}
            required
            // placeholder="#tag"
            className="iamge upload"
          />
          
        </label> */}
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
            <span className="font-normal">(#product, #webdev,#huehue)</span>
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
          className="px-5 py=1.5 text-sm bg-primary-orange rounded-full text-white
"
        >
          {submitting ? `${type}...` : type}
        </button>
      </form>
    </section>
  );
};

export default Form;
