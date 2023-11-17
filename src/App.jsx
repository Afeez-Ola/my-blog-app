import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import './App.css'
import NavBar from './components/Nav';
import Posts from './components/Posts';
import Detail from './components/Detail';

function App() {
 return (
  <>
   <BrowserRouter>
    <NavBar></NavBar>
    <Routes>
     <Route path='/' element={<Posts></Posts>}></Route>
     <Route path={`/read/:id`} element={<Detail></Detail>}></Route>
    </Routes>
   </BrowserRouter>
  </>
 );
}

export default App;
