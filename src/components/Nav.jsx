import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
 return (
  <div className='nav'>
   <h1 className='nav-title'>
    <Link to={'/'}>Bolaji</Link>
   </h1>
   <ul className='nav-links'>
    <li>
     <Link to={'/'}>Home</Link>
    </li>
    <li>
     <Link to={'/new'}>New Blog</Link>
    </li>
   </ul>
  </div>
 );
}

export default NavBar;
