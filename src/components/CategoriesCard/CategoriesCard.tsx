import { type CategorieList } from "../../types/types.d"
import useColor from "../../hooks/useColor"
import { useMealBook } from "../../store/mealStore"
import { CardData } from "../CardData"
import { Grid } from "@mui/material"

const CategoriesCard = ({ strCategory, strCategoryDescription, strCategoryThumb }: CategorieList) => {
  const color = useColor(strCategory)
  const { setDescription, setCategory } = useMealBook()

  const handleState = (): void => {
    setDescription(strCategoryDescription)
    setCategory(strCategory)

  }

  return (
    <Grid xs={2}>
      <CardData category={strCategory} image={strCategoryThumb} handleData={handleState} color={color} />
    </Grid>
  )
}

export default CategoriesCard