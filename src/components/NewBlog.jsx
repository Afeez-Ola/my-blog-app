import React, { useState } from 'react';
import fetchData from './blog';

function NewBlog() {
 const [title, setTitle] = useState();
 const [content, setContent] = useState();
 const [image, setImage] = useState();

 function handleTitleChange(e) {
  setTitle(e.target.value);
 }

 function handleContentChange(e) {
  setContent(e.target.value);
 }

 function handleImageChange(e) {
  setImage(e.target.value);
 }

 function handleSubmit(e){
    e.preventDefault()
    
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
   <button type='submit'>Submit</button>
  </form>
 );
}

export default NewBlog;
