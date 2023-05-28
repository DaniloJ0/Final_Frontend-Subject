import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';


function Register() {
  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& .MuiTextField-root': { m: 1, width: '25ch', display: 'block',backgroundColor: '#F0F0F0' },
        '& .MuiButton-root': { m: 1,alignItems:'center' },'& h2': { fontFamily: 'Arial', fontWeight: 'normal' },
      }}
      noValidate
      autoComplete="off"
    >
      <div style={{  borderRadius: '13px',padding: '10px', textAlign: 'center',marginBottom:'10px', backgroundColor: '#e2e2e2 ' }}>
        <h2>Registro</h2>
        <TextField
          id="outlined-Name"
          label="Name"
          type="Text"
          
        />
        <TextField
          id="outlined-Email"
          label="Email"
          type="email"
          
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <TextField
          id="outlined-number"
          label="Phone"
          type="Tel"
        />
        <div><Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button></div>
      </div>
      
    </Box>
  )
}

export default Register