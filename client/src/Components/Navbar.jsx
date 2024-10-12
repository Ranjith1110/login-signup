import React from 'react'
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Logout from './Logout'


const Navbar = () => {



  return (

    <>
      <AppBar>
        <Toolbar>
          <Typography variant='h4' sx={{flexGrow: 1}}>Ranjith</Typography>
          <Button variant='contained' to='/login' LinkComponent={Link}>Login</Button>
          <Button variant='contained' to='/signup' LinkComponent={Link}>Signup</Button>
          <Logout />
        </Toolbar>
      </AppBar>
    </>

  )
}

export default Navbar