"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Form from "@components/Form";

const CreatePrompt = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [submitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState({ prompt: "", tag: "" });
  const [image, setImage] = useState();

//  const  uploadImage(formData)=
//   .then(uploadedImage => {
//     console.log(uploadedImage);
//   })
//   .catch(_ => {
//     console.log('Oooops, something went wrong!')
//   })

//   const uploadImage = async (e) => {
   
//     const files = e.target.files;
//     const data = new FormData();
//     data.append('file', files[0]);
//     const res = await fetch(process.env.NEXT_PUBLIC_CLOUDINARY, {
//       method: 'POST',
//       body: data
//     })

//     const file = res.json();
// setImage(file);
//   }

  const createPrompt = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/prompt/new", {
        method: "POST",
        body: JSON.stringify({
          // imageUrl:post.imageUrl,
          prompt: post.prompt,
          userId: session?.user.id,
          tag: post.tag,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form
      type='Create'
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPrompt}
    />
  );
};

export default CreatePrompt;