
import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
// import './App.css'
import NavBar from './components/Nav'
import Posts from './components/Posts';

function App() {

  return (
   <>
    <NavBar></NavBar>
    <BrowserRouter>
    <Posts></Posts>
     <Routes>
      <Route path='/' element={<Posts></Posts>}></Route>
      <Route path={`/read/:id`} element={<Detail></Detail>}></Route>
     </Routes>
    </BrowserRouter>
   </>
  );
}

export default App
