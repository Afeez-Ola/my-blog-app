import React, { useEffect, useState } from 'react';
import Post from './Post';
import fetchData from './blog';

function Posts() {
 const [blogs, setBlog] = useState([]);
 const [records, setRecord] = useState([]);

 let data = {
  id: 22,
  title: 'Elbow Macaroni - 400 gm',
  description: 'Product details of Bake Parlor Big Elbow Macaroni - 400 gm',
  brand: 'Bake Parlor Big',
  thumbnail: 'https://i.dummyjson.com/data/products/22/thumbnail.jpg',
  images: [
   'https://i.dummyjson.com/data/products/22/1.jpg',
   'https://i.dummyjson.com/data/products/22/2.jpg',
   'https://i.dummyjson.com/data/products/22/3.jpg',
  ],
 };

 setBlog(data);
 setRecord(data);

 //  useEffect(() => {
 //   async function useFetchData() {
 //    try {
 //     const data = await fetchData();
 //     setBlog(data.products);
 //     setRecord(data.products);
 //     console.log(data.products);
 //    } catch (error) {
 //     console.error('There was error while fetching data', error);
 //    }
 //   }
 //   useFetchData();
 //  }, []);

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

export default Posts;
