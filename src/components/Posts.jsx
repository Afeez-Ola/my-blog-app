import React, { useEffect, useState } from 'react';

function Posts() {
 const [blog, setBlog] = useState({
  id: 0,
  brand: '',
  description: '',
  images: '',
  title: '',
 });
 //  useEffect(() => {
 //   fetch('https://dummyjson.com/products')
 //    .then((res) => console.log(res.json()))
 //    .catch((err) => console.log(err));
 //  });

 const fetchBlog = () => {
  fetch('https://api.slingacademy.com/v1/sample-data/blog-posts')
   .then((res) => {
    console.log(res);
   })
   .catch((err) => console.log(err));
 };
 fetchBlog();
 return (
  <div className='posts'>
   <div className='search-container'>
    <input
     className='search-input'
     type='text'
     placeholder='search posts'
    ></input>
   </div>
   <div className='posts-container'></div>
  </div>
 );
}

export default Posts;
