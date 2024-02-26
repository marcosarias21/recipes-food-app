import { useEffect, useState } from "react"
import { Hero } from "../../components/Hero"
import { Navbar } from "../../components/Navbar"
import { CategoriesCard } from "../../components/CategoriesCard"
import { type CategorieList } from "../../types/types.d"
import useFetch from "../../hooks/useFetch"
import { Container, Grid, Typography } from "@mui/material"
import { InformationMeal } from "../../components/InformationMeal"
import { Meals } from "../Meals"
import { useMealBook } from "../../store/mealStore"

const Home = () => {
  const [categories, setCategories] = useState<CategorieList[]>([])
  const { data } = useFetch("https://www.themealdb.com/api/json/v1/1/categories.php")
  const { category } = useMealBook()
  
  useEffect(() =>{
    setCategories(data?.data?.categories)      
  }, [data])
  return (
    <>
    <Navbar />
    <Hero />
    <InformationMeal />
    <Container disableGutters={true} maxWidth={"xl"} sx={{ my: 10 }}>
      {
        category &&  <Meals />
      }
    </Container>
    <Container disableGutters={true} maxWidth={"xl"}>
      <Typography variant="h4" fontWeight={"bold"} mb={6}>Categories</Typography>
      <Grid container spacing={2} gap={2} marginTop={2} justifyContent={"center"}>
        {
          categories?.map(categorie => <CategoriesCard {...categorie} />)
        }    
      </Grid>      
    </Container>
    </>
  )
}

export default Home