import { useQuery } from "react-query"
import { get } from "../utils"

const useUser = () =>
  useQuery(
    "user",
    async () => {
      const { data: res } = await get("/home")
      return res
    },
    { staleTime: 1000 * 60 * 30 }
  )

export default useUser
