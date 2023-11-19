import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
 const { id } = useParams();
 const [post, setPost] = useState({});
 const [images, setImages] = useState([]);
 const [error, setError] = useState(null);


 useEffect(() => {
  const fetchPost = async () => {
   try {
    const response = await fetch(`https://dummyjson.com/products/${id}`, {
     method: 'GET',
    });

    if (!response.ok == 200) {
     throw new Error('Network error encounterred!');
    }

    const data = await response.json();
    setPost(data);
    console.log(data);
    setImages(data.images);
   } catch (error) {
    console.log('Error fetching data:', error);
   }
  };

  fetchPost();
 }, [id]);

 console.log(post);

 return (
  <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-4 mb-4'>
   <div className='bg-white p-6 rounded-md shadow-md'>
    <h2 className='text-xl font-bold mb-2'>{post.title}</h2>
    {images.map((image, index) => {
     return (
      <img
       src={image}
       key={index}
       alt='Blog Post Image'
       className='mb-4 rounded-md w-full'
      ></img>
     );
    })}
    <p className='text-gray-700 mb-4'>{post.description}</p>
   </div>
  </div>
 );
}

export default Detail;
