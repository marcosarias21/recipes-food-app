import { useEffect, useState } from "react"
import { Hero } from "../../components/Hero"
import { Navbar } from "../../components/Navbar"
import { CategoriesCard } from "../../components/CategoriesCard"
import { type CategorieList } from "../../types/types.d"
import useFetch from "../../hooks/useFetch"
import { Container, Grid } from "@mui/material"

const Home = () => {
  const [categories, setCategories] = useState<CategorieList[]>([])
  const { data } = useFetch("https://www.themealdb.com/api/json/v1/1/categories.php")
  console.log(data?.data?.categories)
  
  useEffect(() =>{
    setCategories(data?.data?.categories)      
  }, [data])
  return (
    <>
    <Navbar />
    <Hero />
    <Container disableGutters={true} maxWidth={"xl"}>
      <Grid container spacing={2} gap={2} marginTop={20} justifyContent={"center"}>
        {
          categories?.map(categorie => <CategoriesCard {...categorie} />)
        }    
      </Grid>      
    </Container>
    </>
  )
}

export default Home