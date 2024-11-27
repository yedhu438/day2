import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const Listmap = () => {
    var[inp,setinp]=useState(["tctak"])
    var[data,setdata]=useState("")
   
    const add=(e)=>{
        setdata(e.target.value)
        
    }

    const addbutton=()=>{
        setinp([...inp,data])
        console.log(inp)
        setdata("")

    }
  return (
    <div>

    <TextField variant='outlined' label="enter your name" onChange={add} value={data}/>
    <Button variant='contained' onClick={addbutton}>Submit</Button>
    <ul>
        
            {inp.map((v)=>{
                return  <li>{v}</li>
        })}
            </ul>


    </div>
  )
}

export default Listmap