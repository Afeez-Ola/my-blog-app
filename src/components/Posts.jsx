import React, { useEffect, useState } from 'react';
import Post from './Post';
import { getBlogs } from './Blogs';

function Posts() {
 const [blogs, setBlogs] = useState([]);

 useEffect(() => {
  try {
   const newBlog = getBlogs();
   setBlogs((prevBlogs) => [...prevBlogs, newBlog]);
  } catch (error) {
   console.log('There was an error in setting blogs', error);
  }
 }, []);

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
    {blogs.map((blog) => {
     return (
      <Post
       key={blog.id}
       index={blog.id}
       title={blog.title}
       thumbnail={blog.thumbnail}
       description={blog.description}
       brand={blog.brand}
      ></Post>
     );
    })}
   </div>
  </div>
 );
}

export default Posts;
