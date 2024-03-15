import { useParams } from "react-router-dom"
import useFetch from "../../hooks/useFetch"
import { Navbar } from "../../components/Navbar"
import { useMealBook } from "../../store/mealStore"

const DetailMeal = () => {
  const { id } = useParams()
  const { setOpenMeal } = useMealBook()
  console.log(id)
  const data = useFetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
  console.log(data)
  return (
    <>
    <Navbar />
    <div>DetailMeal</div>
    </>
  )
}

export default DetailMeal