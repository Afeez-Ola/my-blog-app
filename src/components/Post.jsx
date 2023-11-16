import React from "react";

function Post(props){
    return (
     <div className='post' key={props.index}>
      <div className='wrapper'>
       <img src={props.thumbnail}></img>
       <p className='title'>{props.title}</p>
       <p className='content'>{props.description}</p>

       <a href='#_'>
        <div class='readmore'>
         <b>Read more!</b> <i class='fas fa-angle-right'></i>
        </div>
       </a>
      </div>
     </div>
    );
}

export default Post;