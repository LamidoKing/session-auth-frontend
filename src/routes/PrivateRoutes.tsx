/* eslint-disable react/jsx-props-no-spreading */
import { FunctionComponent } from "react"
import { Route, Redirect } from "react-router-dom"
import { useUser } from "../hooks"
import Header from "../components/Header/Header"
import Loading from "../components/Loading/Loading"

interface PrivateRouteProps {
  component: FunctionComponent
  path: string
}

const PrivateRoute = ({
  component: Component,
  path,
  ...rest
}: PrivateRouteProps) => {
  const { data, isFetching, isSuccess } = useUser()

  const isLoggedIn = isSuccess && data.user !== undefined

  return (
    <>
      {isFetching ? (
        <Loading open={isFetching} />
      ) : (
        <>
          <Header />
          <Route
            {...rest}
            render={(props: any) =>
              isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />
            }
          />
        </>
      )}
    </>
  )
}

export default PrivateRoute
