import { Row } from 'antd'
import React, { useState } from 'react'
import Keybord from './components/Keybord'

function Calculator() {
    const [value,setValue]=useState(0);
    const [str, setStr]=useState("");

    const ans = () => {
    let temp = [];
     let num="";
     for(let i=0;i<str.length;i++){
      if(str[i]==="+" || str[i]==="-" || str[i]==="*"||str[i]==="/"){
        temp.push(Number(num),str[i]);
        num="";
      }
      else if( i === (str.length-1)){
        num=num+str[i];
        temp.push(Number(num));
        num="";
      }
      else{
        num=num+str[i];
      }
     }
     let finalans=0;
     for(let j=0; j<temp.length;j++){
      
       if(j === 0){
        finalans=temp[j]
      }
      else if(temp[j]==="+"){
        finalans=finalans+temp[j+1]
      }
      else if(temp[j]==="-"){
        finalans=finalans-temp[j+1]
      }
      else if(temp[j]==="*"){
        finalans=finalans*temp[j+1]
      }
      else if(temp[j]==="/"){
        finalans=finalans/temp[j+1]
      }
     }
   setValue(finalans)
    }
  return (
    <div>
      <Row>Answer: {value}</Row>
        <Row>{str}</Row>
        <Keybord str={str} setStr={setStr} ans={ans}/>
    </div>
  )
}

export default Calculator