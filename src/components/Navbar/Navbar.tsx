import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Button, Drawer, IconButton, Toolbar, Typography } from "@mui/material"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { useState } from 'react';
import NavlinkDrawer from './NavlinkDrawer';
import { useMealBook } from '../../store/mealStore';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const { isOpenMeal, setOpenMeal } = useMealBook()
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
            {isOpenMeal ? 
            <Link to={'/'} onClick={setOpenMeal}>
              <IconButton>
                <ArrowBackIcon />
              </IconButton>
            </Link> 
            : <IconButton size="large" onClick={() => setOpen(true)}>
                <MenuIcon  color={'action'} fontSize="medium" />
              </IconButton>}
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