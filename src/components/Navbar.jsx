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

    
    
    <Link to="/">
    <Button variant='contained'>text</Button>
    </Link> 
    
    <Link to="/State">
    <Button variant="contained">State</Button>
    </Link> 

    <Link to="/count">
    <Button variant="contained">Count</Button>
    </Link> 

    <Link to="/button">
    <Button variant="contained">Button</Button>
    </Link>

&nbsp;

    <Link to="/l">
    <Button variant="contained">List</Button>
    </Link>

    <Link to="/apio">
    <Button variant="contained">API</Button>
    </Link>
    


        </Toolbar>
        </AppBar>

    </div>
  )
}

export default Navbar