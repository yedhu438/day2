import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar>
        <Toolbar>
    <Typography variant='h6'>Myapp</Typography>
    
        <Link to="/login">
    <Button variant='contained'>Login</Button>
    </Link>

    <Link to="/">
    <Button variant='contained'>Signup</Button>
    </Link>

    <button>MyApp</button>
    <Typography>news</Typography><br />
    <Link to="/">
    <Button variant='contained'>text</Button>
    </Link> 
    
    


        </Toolbar>
        </AppBar>

    </div>
  )
}

export default Navbar