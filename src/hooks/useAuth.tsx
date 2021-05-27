import { useMutation, useQueryClient } from "react-query"
import { useHistory } from "react-router-dom"
import { post } from "../utils"

interface UseAuth {
  type:
    | "login"
    | "signUp"
    | "logout"
    | "verify"
    | "fogotPasssword"
    | "resendVerification"
  path: string
}
const useAuth = ({ type, path }: UseAuth) => {
  const history = useHistory()

  const queryClient = useQueryClient()

  const mutation = useMutation(
    type,
    async (data) => {
      const { data: res } = await post(path, data)
      return res
    },
    {
      onSuccess: () => {
        if (type === "logout") {
          history.go(0)
        }
        if (type === "login" || type === "signUp") {
          queryClient.invalidateQueries("home")
          history.push("/home")
        }
      },
      onError: async (error: any) => {
        return error
      },
    }
  )
  return mutation
}

export default useAuth
