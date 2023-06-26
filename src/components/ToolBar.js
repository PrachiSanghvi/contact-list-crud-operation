import React from 'react'
import { AppBar, Box, CssBaseline, Toolbar } from '@mui/material'

// Top toobar for any update and header
const ToolBar = () => {
  const drawerWidth = 60;
  return (
    <div>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
       <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
        style={{ background : '#fff' }}
      >
        <Toolbar style={{ minHeight: '50px' }}></Toolbar>  
      </AppBar>
      </Box>
    </div>
  )
}

export default ToolBar