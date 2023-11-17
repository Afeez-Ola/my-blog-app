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
       index={blog.id}
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
