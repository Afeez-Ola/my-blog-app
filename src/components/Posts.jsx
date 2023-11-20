import React, { useEffect, useState } from 'react';
import Post from './Post';
import { Blogs } from './Blogs';

function Posts() {
 const [blogs, setBlog] = useState([]);
 const [records, setRecord] = useState([]);

 const randomBlogPost = Blogs();
 console.log(typeof randomBlogPost);

 setBlog([randomBlogPost]);

 //  setBlog(data);
 //  setRecord(data);

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
