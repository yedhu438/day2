import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Statebasics = () => {

   

    var[name,setname]=useState("yedhu")
    var[val,setval]=useState()
    
        const handleinput= (e)=>{
            console.log(e.target.value)
            setname(e.target.value)
        }    
        const submithandler=()=>{

          setval(name)

        }
  return (
    <div>
        <Typography variant='h3'>welcome {val}</Typography>
        <TextField variant='outlined' onChange={handleinput}/>
        <Button variant='contained' onClick={submithandler}>submit</Button>
    </div>
  )
}

export default Statebasics