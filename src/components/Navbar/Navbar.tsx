import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Drawer, IconButton, Toolbar, Typography } from "@mui/material"
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { useState } from 'react';
import NavlinkDrawer from './NavlinkDrawer';

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="warning">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }} gap={1}>
            <MenuBookIcon />
            <Typography variant="h6" fontWeight={"bold"} component="div" sx={{ flexGrow: 1 }}>
              FastRecipes
            </Typography>
          </Box>
          <Box>
            <IconButton size="large" onClick={() => setOpen(true)}>
              <MenuIcon  color={'action'} fontSize="medium" />
            </IconButton>         
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer open={open} anchor='right' onClose={() => setOpen(false)}>
        <NavlinkDrawer />
      </Drawer>
    </Box>
  )
}

export default Navbar