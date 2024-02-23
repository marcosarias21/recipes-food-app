import { Box, Card, CardActionArea, CardMedia, Chip, Grid, Typography } from "@mui/material"
import { type CategorieList } from "../../types/types.d"
import useColor from "../../hooks/useColor"
import { useMealBook } from "../../store/mealStore"

const CategoriesCard = ({ strCategory, strCategoryDescription, strCategoryThumb }: CategorieList) => {
  const color = useColor(strCategory)
  const { setDescription } = useMealBook()
  return (
    <Grid xs={2} >
      <Card>
        <CardActionArea sx={{ transition: '0.2s', ':hover': { transform: 'scale(1.05)' } }} onClick={() => setDescription(strCategoryDescription)}>
          <CardMedia
            component="img"
            height={"100%"}
            image={`${strCategoryThumb}`}
            alt={`${strCategoryThumb}`}
            sx={{ position: 'relative' }}
          />
          <Box sx={{ position: 'absolute', top: 5, right: 5 }} >
            <Chip sx={{ borderRadius: 2, padding: '1px', fontWeight: 'bold' }} label={strCategory} variant="filled" color={`${color}`} />
          </Box>
        </CardActionArea>
    </Card>
    </Grid>
  )
}

export default CategoriesCard