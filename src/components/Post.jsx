import React from 'react';

function Post(props) {
 return (
  <Link to={`/read/${props.index}`}>
      <div class='flex post -mx-4 flex-wrap justify-center align-center ' key={props.index}>
       <div class='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-4 mb-4'>
        <div class='bg-white p-6 rounded-md shadow-md'>
         <h2 class='text-xl font-bold mb-2'>{props.title}</h2>
         <img
          src={props.thumbnail}
          alt='Blog Post Image'
          class='mb-4 rounded-md w-full'
         ></img>
         <p class='text-gray-700 mb-4'>{props.description}</p>
         <a href='#' class='text-blue-500 hover:underline'>
          Read more
         </a>
        </div>
       </div>
      </div>
  </Link>
 );
}

export default Post;
