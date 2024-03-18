import { useEffect, useState } from "react"

const useKeyObject = (data: any, key: string) => {
  const [dataKey, setDataKey] = useState<string[]>([])
  console.log(dataKey)
  
  useEffect(() =>{
    const mealObject = data?.data?.meals
    let arrayProp = []
    if(mealObject?.length > 0){
      for (let ingredientKey in mealObject[0]) {
        if(ingredientKey.includes(key)){
          arrayProp.push(mealObject[0][ingredientKey])
          setDataKey(arrayProp)
            console.log(mealObject[0][ingredientKey])      
          }
      }  
    }

  }, [key])
  return dataKey
}

export default useKeyObject