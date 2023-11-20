import React, { useState, useEffect } from 'react';
import fetchData from './blog';

function NewBlog() {
  function generateUniqueId() {
  const timestamp = new Date().getTime();
  const random = Math.random().toString(36).substring(2);

  const uniqueId = timestamp + random;

  return uniqueId;
 }
 const [title, setTitle] = useState();
 const [content, setContent] = useState();
 const [image, setImage] = useState();
 const [data, setData] = useState([]);

 useEffect(() => {
  async function useFetchData() {
   try {
    const data = await fetchData();
    setData(data.products);
    console.log(data.products);
   } catch (error) {
    console.error('There was error while fetching data', error);
   }
  }
  useFetchData();
 }, []);

 function handleTitleChange(e) {
  setTitle(e.target.value);
 }

 function handleContentChange(e) {
  setContent(e.target.value);
 }

 function handleImageChange(e) {
  setImage(e.target.value);
 }

 function handleSubmit(e) {
  e.preventDefault();
  const newBlog = {
   id: generateUniqueId(),
   title: title,
   description: content,
   thumbnail: image,
  };
  data.push(newBlog);
  console.log(data);
  console.log(typeof data);
 }

 console.log(title, content, image);
 return (
  <form className='new_form'>
   <div>
    <label htmlFor='title'>Title:</label>
    <input onChange={handleTitleChange} type='text' id='title' required />
   </div>
   <div>
    <label htmlFor='content'>Content:</label>
    <textarea onChange={handleContentChange} id='content' required />
   </div>
   <div>
    <label htmlFor='image'>Image URL:</label>
    <input onChange={handleImageChange} type='text' id='image' />
   </div>
   <button
    onClick={() => {
     handleSubmit();
    }}
    type='submit'
   >
    Submit
   </button>
  </form>
 );
}

export default NewBlog;
