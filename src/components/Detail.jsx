import React from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
 const { id } = useParams();

 return <p>Detail {id}</p>;
}

export default Detail;
