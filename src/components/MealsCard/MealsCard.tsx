import { Box, Card, CardActionArea, CardMedia, Chip, Grid } from "@mui/material"
import { Meal } from "../../types/types.d"

const MealsCard = ({ strMeal, strMealThumb } : Meal) => {
  return (
    <Grid xs={2}>
      <Card>
          <CardActionArea sx={{ transition: '0.2s', ':hover': { transform: 'scale(1.05)' } }}>
            <CardMedia
              component="img"
              height={"100%"}
              image={`${strMealThumb}`}
              alt={`${strMealThumb}`}
              sx={{ position: 'relative' }}
            />
            <Box sx={{ position: 'absolute', top: 5, right: 5 }} >
              <Chip sx={{ borderRadius: 2, padding: '1px', fontWeight: 'bold' }} label={strMeal} variant="outlined" color="secondary" />
            </Box>
          </CardActionArea>
        </Card>
    </Grid>
  )
}

export default MealsCard