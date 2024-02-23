import { Alert, Container } from "@mui/material"
import { useMealBook } from "../../store/mealStore"

const InformationMeal = () => {
  const { description } = useMealBook()
  return (
    <Container maxWidth={"xl"} sx={{ mt: 5 }}>
    {
      description ? <Alert variant="outlined" severity="info"> {description} </Alert> : null
    }
    </Container>
    
  )
}

export default InformationMeal