
import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Home from '../pages/Home'
import Design from '../pages/Design'

//will contain all the navigation logic
const AppRoutes = () => {

   return (
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Design' element={<Design />} />
         </Routes>
      </BrowserRouter>
   )
}



export default AppRoutes
