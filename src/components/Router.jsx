import React from 'react'
import { BrowserRouter, Routes,Route } from "react-router-dom";
import LandingPage from '../pages/LandingPage';
import Post from './Post';

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/post/:PostId' element={<Post/>} />
    </Routes>
    
    </BrowserRouter>
  )
}

export default Router