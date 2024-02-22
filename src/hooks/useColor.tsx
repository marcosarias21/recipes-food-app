import { useEffect, useState } from "react"
import { CategorieList } from "../types/types.d"

const useColor = (strCategory: CategorieList["strCategory"]) => {
  const [color, setColor] = useState<string>("error")
  useEffect(() => {
    if (strCategory === "Beef" || strCategory === "Lamb" || strCategory === "Goat") {
      setColor("error")
    } 
    else if (strCategory === "Chicken" || strCategory === "Pork" || strCategory === "Breakfast") {
      setColor("warning")
    } 
    else if  (strCategory === "Dessert" || strCategory === "Pasta" || strCategory === "Miscellaneous") {
      setColor("default")
    }
    else if (strCategory === "Vegan" || strCategory === "Seafood" || strCategory === "Side" || strCategory ===  "Vegetarian" || strCategory === "Starter" ) {
      setColor("success")
    }
  }, [])
  return color
}

export default useColor