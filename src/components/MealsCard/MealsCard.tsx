import { Box, Card, CardActionArea, CardMedia, Chip, Grid } from "@mui/material"
import { Meal } from "../../types/types.d"
import { CardData } from "../CardData"

const MealsCard = ({ strMeal, strMealThumb } : Meal) => {
  return (
    <CardData category={strMeal} image={strMealThumb} color="default"/>
  )
}

export default MealsCard