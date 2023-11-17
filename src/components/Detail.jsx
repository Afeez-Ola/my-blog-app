import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
 const { id } = useParams();
 const [post, setPost] = useState({});
 const [images, setImages] = useState([]);

 useEffect(() => {
  fetch(`https://dummyjson.com/products/${id}`, {
   method: 'GET',
  })
   .then((res) => res.json())
   .then((data) => {
    setPost(data);
    setImages(data.images);
    console.log(data);
   })
   .catch((err) => console.log(err));
 }, [id]);

 console.log(post);

 return (
  //   <h1>Detail {post.title}</h1>
  <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-4 mb-4'>
   <div className='bg-white p-6 rounded-md shadow-md'>
    <h2 className='text-xl font-bold mb-2'>{post.title}</h2>
    {images.map((image, index) => {
     return (
      <img
       src={image}
       key={index}
       alt='Blog Post Image'
       class='mb-4 rounded-md w-full'
      ></img>
     );
    })}
    <p className='text-gray-700 mb-4'>{post.description}</p>
   </div>
  </div>
 );
}

export default Detail;
