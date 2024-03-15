import { Box, Card, CardActionArea, CardMedia, Chip, Grid } from "@mui/material"

interface Props {
  category: string
  image: string
  handleData?: () => void
  color: string
}

const CardData = ({ category, image, handleData, color }: Props) => {
  return (
    <Card onClick={handleData}>
      <CardActionArea sx={{ transition: '0.2s', ':hover': { transform: 'scale(1.05)' } }}>
        <CardMedia
          component="img"
          height={"100%"}
          image={`${image}`}
          alt={`${image}`}
          sx={{ position: 'relative' }}
        />
        <Box sx={{ position: 'absolute', top: 5, right: 5 }} >
          <Chip sx={{ borderRadius: 2, padding: '1px', fontWeight: 'bold' }} label={category} variant="filled" color={`${color}`} />
        </Box>
      </CardActionArea>
    </Card>
  )
}

export default CardData