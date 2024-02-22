import { Box, Button, InputBase, Paper, Typography } from "@mui/material"
import image from '../../assets/images/header_image.jpg'
import { Search } from "@mui/icons-material"

const Hero = () => {
  return (
    <Box  display={"flex"} justifyContent={"center"} alignItems={"center"} height="550px" width={"100%"} sx={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${image})`, backgroundPosition: 'center' }}>
      <Box display={"block"} justifyContent={"center"} alignItems={"center"}>
        <Box display={"flex"} justifyContent={"center"} gap={2}>
          <Paper sx={{ backgroundColor: '#fff', borderRadius: '40px', padding: 1, boxShadow: "1px 0px 16px 4px rgba(0,0,0,0.75)" }}>
            <InputBase sx={{ borderRadius: '40px', paddingLeft: 2, paddingRight: 10 }} placeholder="Please enter text.." />
          </Paper>
          <Button color="warning" variant="contained" sx={{ borderRadius: 20 }}>
            <Search />
          </Button>
        </Box>
        <Box  display={"block"} justifyContent={"center"} alignItems={"center"} marginTop={5}>
          <Typography letterSpacing={1} color={"#fff"} variant={"h4"} fontWeight={"bold"}>What are your favorite cuisines?</Typography>
          <Typography mt={3} variant={"body1"} color={"#fff"}>PERSONALIZE YOUR EXPERIENCE</Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Hero