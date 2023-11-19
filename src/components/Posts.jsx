import React, { useEffect, useState } from 'react';
import Post from './Post';

function Posts() {
 const [blogs, setBlog] = useState([]);
 const [records, setRecord] = useState([]);

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
    setBlog(data.products);
    setRecord(data.products);
   } catch (error) {
    console.error('Error fetching data:', error);
   }
  };

  fetchData();
 }, []);

 function handleSearch(e) {
  setBlog(
   records.filter((record) => {
    return record.title.toLowerCase().includes(e.target.value.toLowerCase());
   }),
  );
 }

 return (
  <div className='posts'>
   <div className='search-container'>
    <input
     className='search-input'
     type='text'
     placeholder='search posts'
     onInput={handleSearch}
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
