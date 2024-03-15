import { Meal } from "../../types/types.d"
import { CardData } from "../CardData"
import { Link } from "react-router-dom"
import { Grid } from "@mui/material"
import { useMealBook } from "../../store/mealStore"

const MealsCard = ({ strMeal, strMealThumb, idMeal } : Meal) => {
  const { isOpenMeal, setOpenMeal } = useMealBook()
  console.log(isOpenMeal)
  return (
    <Grid xs={2}>
      <Link to={`./detail/${idMeal}`} onClick={setOpenMeal} >
        <CardData category={strMeal} image={strMealThumb} color="default"/>
      </Link>
    </Grid>
  )
}

export default MealsCard