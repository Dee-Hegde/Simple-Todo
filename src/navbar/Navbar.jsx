import React from 'react'
import LogoContainer from './Components/LogoContainer'
import NavProfile from './Components/NavProfile'

function Navbar() {
  return (
    <div style={{display:"flex", flexDirection:"row",justifyContent:"space-between",height:"7vh"}}>
      <LogoContainer/>
       <NavProfile/>
    </div>
  )
}

export default Navbar