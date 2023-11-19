import React from 'react';
import { Link } from 'react-router-dom';

function NewBlog() {
 return (
  <div class='container'>
   <div class='row'>
    <div class='col-md-12'>
     <form method='post' role='form'>
      <div class='form-group'>
       <input
        type='text'
        class='form-control'
        name='title'
        placeholder='Title'
       />
      </div>
      <div class='form-group'>
       <label> Image </label>
       <div class='input-group'>
        <span class='input-group-btn'>
         <span class='btn btn-primary btn-file'>
          Browse <input type='file' name='bimgs' multiple></input>
         </span>
        </span>
        <input type='text' class='form-control' readonly></input>
       </div>
      </div>
      <div class='form-group'>
       <textarea class='form-control bcontent' name='content'></textarea>
      </div>
      <div class='form-group'>
       <input
        type='submit'
        name='Submit'
        value='Publish'
        class='btn btn-primary form-control'
       ></input>
      </div>
     </form>
    </div>
   </div>
  </div>
 );
}

export default NewBlog;
