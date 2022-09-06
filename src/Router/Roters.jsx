import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../todo/Home'
import Navbar from '../navbar/Navbar'


function AppRoters() {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
        </Routes>
        
    </div>
  )
}

export default AppRoters