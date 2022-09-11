import { Button, Col, Row } from 'antd'
import React from 'react'

function Keybord(props) {
  const {str,setStr,ans}=props
    const keyboard=[
        {id:"1",value:"1"},
        {id:"2",value:"2"},
        {id:"3",value:"3"},
        {id:"4",value:"4"},
        {id:"5",value:"5"},
        {id:"6",value:"6"},
        {id:"7",value:"7"},
        {id:"8",value:"8"},
        {id:"9",value:"9"},
        {id:"0",value:"0"},
        {id:"+",value:"+"},
        {id:"-",value:"-"},
        {id:"*",value:"*"},
        {id:"/",value:"/"},
    ]
  const handleStr=(e)=>{
    console.log(e)
  }
  return (
    <div>
      <Row>
     {keyboard.map((item)=>
     <Col key={item.id}><Button 
     type="primary" 
     shape="round"  
     size={"large"} 
     onClick={()=>{setStr(pre=>pre+item.value)}}
     >{item.value}</Button></Col>)}
     <Button onClick={()=>ans()}>=</Button>
     </Row>
    </div>
  )
}

export default Keybord