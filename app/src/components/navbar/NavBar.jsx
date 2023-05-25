import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{
          backgroundColor: '#e2e2e2',
          '.MuiBottomNavigationAction-root.Mui-selected': {
            color: '#088eff',
          },
        }}
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Register" icon={<PersonAddIcon />} />
        <BottomNavigationAction label="Login" icon={<LoginIcon />} />
        
      </BottomNavigation>
    </Box>
  );
}
