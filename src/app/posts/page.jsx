import { getData } from '@/post/getPostApi';
import Link from 'next/link';
import React from 'react'

const PostPage = async() => {
    const postData = await getData()
    // console.log(postData);
  return (
    <div className='grid grid-cols-3 gap-4 p-6'>
      {
        postData.slice(0,10).map(post => (
            <div key={post.id} className='border-2 p-3'>
                <h2 className='text-xl font-medium'>{post.title}</h2>
                <p>{post.body}</p>
                <p>{post.description}</p>
                <button className='bg-red-400 p-2 mt-4'><Link href={`/posts/${post.id}`}>See Details</Link></button>
            </div>
        ))
      }
    </div>
  )
}

export default PostPage
