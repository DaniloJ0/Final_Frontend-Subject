import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';

function Login() {
  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& .MuiTextField-root': { m: 1, width: '25ch', display: 'block',backgroundColor: '#F0F0F0', },
        '& .MuiButton-root': { m: 1,alignItems:'center' },'& h2': { fontFamily: 'Arial', fontWeight: 'normal' },
      }}
      noValidate
      autoComplete="off"
    >
      <div style={{ borderRadius: '13px',padding: '10px', textAlign: 'center' ,backgroundColor: '#e2e2e2 '}}>
      <h2>Login</h2>
      <TextField
          id="outlined-required"
          label="Email"
          type="email"
          
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <div><Button variant="contained" endIcon={<SendIcon />}>Send</Button></div>
        
      </div>
      
    </Box>
  )
}

export default Login