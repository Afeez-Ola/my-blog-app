import React from 'react';

function Post(props) {
 return (
  <div className='post main' key={props.index}>
   <ul class='cards'>
    <li class='cards_item'>
     <div class='card'>
      <div class='card_image'>
       <img src={props.thumbnail}></img>
      </div>
      <div class='card_content'>
       <h2 class='card_title'>{props.title}</h2>
       <p class='card_text'>{props.description}</p>
       <button class='btn card_btn'>Read More</button>
      </div>
     </div>
    </li>
   </ul>
  </div>
 );
}

export default Post;
