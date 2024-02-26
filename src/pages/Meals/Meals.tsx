import { MealsCard } from '../../components/MealsCard'
import { useMealBook } from '../../store/mealStore'
import useFetch from '../../hooks/useFetch'
import { Box, CircularProgress, Grid, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { type Meal } from '../../types/types.d'

const Meals = () => {
  const { category } = useMealBook()
  const [meals, setMeals] = useState<Meal[]>([])
  console.log(meals)
  const dataMeal = useFetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
  useEffect(() => {
    setMeals(dataMeal?.data?.data?.meals)
  }, [dataMeal.data])
  return (
    <Box>
      <Typography variant='h4' fontWeight={"bold"}>Meals</Typography>
      <Grid container spacing={2} gap={2} marginTop={2} justifyContent={"center"}>
        {dataMeal.data.loading ? <CircularProgress /> : meals?.map((meal) => <MealsCard key={meal.idMeal} {...meal} />)}   
      </Grid>
    </Box>
  )
}

export default Meals