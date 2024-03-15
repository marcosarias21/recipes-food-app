import axios from "axios"
import { useEffect, useState } from "react"

const useFetch = (url: string) => {
  const [data, setData] = useState<{ data: any | null; loading: boolean }>({
    data: null,
    loading: true,
  })

  const getDataFetch = async (): Promise<void> => {
    setData({
      data: null,
      loading: true,
    })
    const resp = await axios.get(url)
    console.log(resp)
    setData({
      data: resp.data,
      loading: false,
    })
  }

  useEffect(() => {
    getDataFetch()
  }, [url])
  return { data }
}

export default useFetch