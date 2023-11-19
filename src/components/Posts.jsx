import React, { useEffect, useState } from 'react';
import Post from './Post';
import fetchData from './blog';

export function Posts() {
 const [blogs, setBlog] = useState([]);
 const [records, setRecord] = useState([]);

 useEffect(() => {
  async function useFetchData() {
   try {
    const data = await fetchData();
    setBlog(data.product);
    setRecord(data.product);
    console.log(data);
   } catch (error) {
    console.error('There was error while fetching data', error);
   }
  }
  useFetchData();
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
       brand={blog.brand}
      ></Post>
     );
    })}
   </div>
  </div>
 );
}

export const BlogsContext = React.createContext();
export const BlogsProvider = BlogsContext.Provider;
export const BlogsConsumer = BlogsContext.Consumer;

export default BlogsContext;
