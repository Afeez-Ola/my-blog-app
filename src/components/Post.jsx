import React from 'react';
import { Link } from 'react-router-dom';

function Post(props) {
 return (
  <Link to={`/read/${props.index}`}>
   <div
    className='flex post -mx-4 flex-wrap justify-center align-center '
    key={props.index}
   >
    <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-4 mb-4'>
     <div className='bg-white p-6 rounded-md shadow-md'>
      <h2 className='text-xl font-bold mb-2'>{props.title}</h2>
      <img
       src={props.thumbnail}
       alt='Blog Post Image'
       className='mb-4 rounded-md w-full'
      ></img>
      <p className='text-gray-700 mb-4'>{props.description}</p>
      <a href='#' className='text-blue-500 hover:underline'>
       Read more
      </a>
     </div>
    </div>
   </div>
  </Link>
 );
}

export default Post;
