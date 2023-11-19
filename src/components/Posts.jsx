import React, { useEffect, useState } from 'react';
import Post from './Post';

function Posts() {
 const [blogs, setBlog] = useState([]);

 useEffect(() => {
  const fetchData = async () => {
   try {
    const response = await fetch('https://dummyjson.com/products', {
     method: 'GET',
    });

    if (!response.ok) {
     throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log(data.products);
    setBlog(data.products);
   } catch (error) {
    console.error('Error fetching data:', error);
   }
  };

  fetchData();
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
    {blogs.map((blog, index) => {
     return (
      <Post
       index={index + 1}
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
