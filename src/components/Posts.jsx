import React, { useEffect, useState } from 'react';
import Post from './Post';

function Posts() {
 const [blogs, setBlog] = useState([]);

 useEffect(() => {
  fetch('https://dummyjson.com/products?skip=5&limit=5', {
   method: 'GET',
  })
   .then((res) => res.json())
   .then((data) => {
    console.log(data.products);
    setBlog(data.products);
   })
   .catch((err) => console.log(err));
 });

 //  const fetchBlogWithBackoff = (retryCount = 0) => {
 //   const delay = Math.pow(2, retryCount) * 1000; // Exponential backoff
 //   setTimeout(() => {
 //    fetchBlog().catch((error) => {
 //     console.error(error);
 //     fetchBlogWithBackoff(retryCount + 1);
 //    });
 //   }, delay);
 //  };

 // Call fetchBlogWithBackoff instead of fetchBlog

 return (
  <div className='posts'>
   <div className='search-container'>
    <input
     className='search-input'
     type='text'
     placeholder='search posts'
    ></input>
   </div>
   <div className='posts-container'>
    {blogs.map((blog, index) => {
     return (
      <Post
       index={index}
       title={blog.title}
       thumbnail={blog.thumbnail}
       description={blog.description}
      ></Post>
     );
    })}
   </div>
  </div>
 );
}

export default Posts;
