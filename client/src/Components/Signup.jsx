import React from 'react';
import { Grid, Link, Button, Paper, TextField, Typography } from "@mui/material";

const Signup = () => {
  return (
    <>
      <Grid align="center" className="wrapper">
        <Paper style={paperStyle} sx={{
          width: {
            xs: '80vw',     // 0
            sm: '50vw',     // 600
            md: '40vw',     // 900
            lg: '30vw',     // 1200
            xl: '20vw',     // 1536 
          },
          height: {
            lg: '60vh',     // 1200px and up
          }
        }}>
          <Typography component="h1" variant="h5" style={heading}> Signup </Typography>
          <form onSubmit={handleSignup}>
            <TextField style={row} sx={{ label: { fontWeight: '700', fontSize: "1.3rem" } }} fullWidth type="text" label="Enter Name" name="name" onChange={(e) => setName(e.target.value)}></TextField>
            <TextField style={row} sx={{ label: { fontWeight: '700', fontSize: "1.3rem" } }} fullWidth label="Email" variant="outlined" type="email" placeholder="Enter Email" name="email" onChange={(e) => setEmail(e.target.value)} />
            <TextField style={row} sx={{ label: { fontWeight: '700', fontSize: "1.3rem" } }} fullWidth label="Password" variant="outlined" type="password" placeholder="Enter Password" name="password" onChange={(e) => setPassword(e.target.value)} />
            <Button style={btnStyle} variant="contained" type="submit">SignUp</Button>
          </form>
          <p>Already have an account?<Link href="/login"> Login</Link></p>
        </Paper>
      </Grid>
    </>
  )
}

export default Signup