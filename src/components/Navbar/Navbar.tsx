import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Drawer, IconButton, Toolbar, Typography } from "@mui/material"
import { useState } from 'react';
import NavlinkDrawer from './NavlinkDrawer';

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="warning">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            FastEat
          </Typography>
          <IconButton aria-label="delete" size="small" onClick={() => setOpen(true)}>
            <MenuIcon  fontSize="medium" color='action' />
          </IconButton>         
        </Toolbar>
      </AppBar>
      <Drawer open={open} anchor='right' onClose={() => setOpen(false)}>
        <NavlinkDrawer setOpen={setOpen} />
      </Drawer>
    </Box>
  )
}

export default Navbar