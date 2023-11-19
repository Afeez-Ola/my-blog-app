import React from 'react';

function NewBlog() {
 return (
  <form className='new_form'>
   <div>
    <label htmlFor='title'>Title:</label>
    <input type='text' id='title' required />
   </div>
   <div>
    <label htmlFor='content'>Content:</label>
    <textarea id='content' required />
   </div>
   <div>
    <label htmlFor='image'>Image URL:</label>
    <input type='text' id='image' />
   </div>
   <button type='submit'>Submit</button>
  </form>
 );
}

export default NewBlog;
