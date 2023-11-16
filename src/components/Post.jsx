import React from 'react';

function Post(props) {
 return (
  <div className='post main' key={props.index}>
   <ul className='cards'>
    <li className='cards_item'>
     <div className='card'>
      <div className='card_image'>
       <img src={props.thumbnail}></img>
      </div>
      <div className='card_content'>
       <h2 className='card_title'>{props.title}</h2>
       <p className='card_text'>{props.description}</p>
       <button className='btn card_btn'>Read More</button>
      </div>
     </div>
    </li>
   </ul>
  </div>
 );
}

export default Post;
