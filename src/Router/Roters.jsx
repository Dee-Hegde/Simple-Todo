import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../todo/Home'
import Navbar from '../navbar/Navbar'
import Calculator from '../calculator/Calculator'


function AppRoters() {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/calculator' element={<Calculator/>}/>
        </Routes>
        
    </div>
  )
}

export default AppRoters