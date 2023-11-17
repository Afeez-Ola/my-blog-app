import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
 return (
  <div className='nav'>
   <h1 className='nav-title'>Bolaji</h1>
   <ul className='nav-links'>
    <li>
     <Link to='/'>Home</Link>
    </li>
    <li>New Blog</li>
   </ul>
  </div>
 );
}

export default NavBar;
