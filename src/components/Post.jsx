import React from 'react';
import { Link } from 'react-router-dom';

function Post(props) {
 return (
  <Link to={`/read/${props.index}`}>
   <div className='wrapper'>
    <div className='card'>
     <div class='card-banner'>
      <p class='category-tag popular'>{props.brand}</p>
      <img class='banner-img' src={props.thumbnail} alt=''></img>
     </div>
     <div className='card-body'>
      <p className='blog-hashtag'>{props.brand}</p>
      <h2 className='blog-title'>{props.title}</h2>
      <p className='blog-description'>{props.description}</p>
     </div>
    </div>
   </div>
  </Link>
 );
}

export default Post;
