import React from "react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const generateMetadata = async ({ params }) => {
  const postData = await getPostDetails(params.id);
  return {
    title: `${postData.title}`,
    description: postData.body,
    keywords: postData.body.split(" "),
  };
};

const getPostDetails = async (id) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}posts/${id}`);
  const data = await res.json();
  return data;
};

const PostDetails = async ({ params }) => {
  const postDetail = await getPostDetails(params.id);
  const { id, userId, body, title } = postDetail;
  return (
    <div className={`${playfair.className} min-h-screen p-10`}>
      <h1 className="text-3xl text-center">Post Details</h1>
      <p>{id}</p>
      <p>{userId}</p>
      <p>{title}</p>
      <p>{body}</p>
    </div>
  );
};

export default PostDetails;
