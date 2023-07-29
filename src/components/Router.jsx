import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from './UI/screens/home/Home'
import CarDetail from './UI/screens/Car-detail/carDetail'

const Router = () => {
  return <BrowserRouter>
    <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<CarDetail />} path='/car/:id' />

        <Route path='*' element={<div> Not found</div>}/>
    </Routes>
    </BrowserRouter>
}

export default Router