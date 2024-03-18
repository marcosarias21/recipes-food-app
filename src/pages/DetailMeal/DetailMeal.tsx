import { useParams } from "react-router-dom"
import useFetch from "../../hooks/useFetch"
import { Navbar } from "../../components/Navbar"
import { Meal } from "../../components/Meal"
import { useEffect, useState } from "react"
import useKeyObject from "../../hooks/useKeyObject"

const DetailMeal = () => {
  const { id } = useParams()
  const [ingredients, setIngredients] = useState<string[]>([])
  console.log(ingredients)
  const { data } = useFetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
  console.log(data)
  const ingredientsKey = useKeyObject(data, "strIngredient")
  const measureKey = useKeyObject(data, "strMeasure")
  console.log(measureKey)


  useEffect(() =>{
    // const mealObject = data?.data?.meals
    // console.log(mealObject)
    // if(mealObject?.length > 0){
    //   for (let ingredientKey in mealObject[0]) {
    //     if(ingredientKey.includes("strIngredient")){
    //         ingredients.push(mealObject[0][ingredientKey])      
    //         console.log(mealObject[0][ingredientKey])      
    //       }
    //   }
  
    // }
  }, [data])

  return (
    <>
    <Navbar />
    <Meal />
    </>
  )
}

export default DetailMeal