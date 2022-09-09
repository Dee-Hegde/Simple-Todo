import React from 'react'
import { Link } from 'react-router-dom';


function NavProfile() {
    
  return (
    <div>
       <Link to="/">Home</Link>
      <Link to="/calculator">Calculator</Link>
  </div>
  )
}

export default NavProfile