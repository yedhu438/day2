import { TextField } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
    <div>
       <h2>Signup</h2>
      username    <input type="text" name="" id="" /><br /><br />
    password    <input type="password" name="" id="" /><br /><br />
    re-enter password    <input type="password" name="" id="" /><br /><br />
    <button>submit</button> 
    {/* <TextField variant='outlined' label='username'/> */}
    </div>
  )
}

export default Signup