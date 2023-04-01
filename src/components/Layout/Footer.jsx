import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
export default function Footer() {

  return (
    <Box sx={{ bottom: 0, left: 0, right: 0}}>
      <AppBar position="static">
        <Toolbar>
          Footer
        </Toolbar>
      </AppBar>
    </Box>

  );
}