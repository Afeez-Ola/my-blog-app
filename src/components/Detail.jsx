import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
 const { id } = useParams();

 useEffect(() => {
  fetch(`https://dummyjson.com/products/${id}`, {
   method: 'GET',
  })
   .then((res) => console.log(res))
   .catch((err) => console.log(err));
 });

 return <p>Detail {id}</p>;
}

export default Detail;
