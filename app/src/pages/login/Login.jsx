import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';

export default function FormPropsTextFields() {
  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& .MuiTextField-root': { m: 1, width: '25ch', display: 'block' },
        '& .MuiButton-root': { m: 1, display: 'block' },
      }}
      noValidate
      autoComplete="off"
    >
      <div style={{ borderRadius: '5px', border: '1px solid gray', padding: '10px', textAlign: 'center' }}>
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
  );
}