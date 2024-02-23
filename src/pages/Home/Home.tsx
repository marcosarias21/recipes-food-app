import { useEffect, useState } from "react"
import { Hero } from "../../components/Hero"
import { Navbar } from "../../components/Navbar"
import { CategoriesCard } from "../../components/CategoriesCard"
import { type CategorieList } from "../../types/types.d"
import useFetch from "../../hooks/useFetch"
import { Container, Grid } from "@mui/material"
import { InformationMeal } from "../../components/InformationMeal"

const Home = () => {
  const [categories, setCategories] = useState<CategorieList[]>([])
  const { data } = useFetch("https://www.themealdb.com/api/json/v1/1/categories.php")
  
  useEffect(() =>{
    setCategories(data?.data?.categories)      
  }, [data])
  return (
    <>
    <Navbar />
    <Hero />
    <InformationMeal />
    <Container disableGutters={true} maxWidth={"xl"}>
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