import { Button } from 'antd'
import React from 'react'

function Keybord() {
    const keyboard=[
        {id:"1",title:"1",value:1},
        {id:"2",title:"2",value:2},
        {id:"3",title:"3",value:3},
        {id:"4",title:"4",value:4},
        {id:"5",title:"5",value:5},
        {id:"6",title:"6",value:6},
        {id:"7",title:"7",value:7},
        {id:"8",title:"8",value:8},
        {id:"9",title:"9",value:9},
        {id:"0",title:"0",value:0},
    ]
  return (
    <div>
     {keyboard.map((item)=><Button type="primary" shape="round"  size={"large"} >{item.title}</Button>)}
    </div>
  )
}

export default Keybord