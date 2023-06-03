import App from './App'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MovieDescription from './compenents/MovieDescription/MovieDescription';
import Navvbar from './compenents/Navbar/Navvbar';

const Home = () => {
  return (
    <div>
        <Navvbar />
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/movie/:id' element={<MovieDescription />} />
        </Routes>
    </div>
  )
}

export default Home