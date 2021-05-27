import { useEffect } from "react"
import { Link as RouterLink } from "react-router-dom"
import { Button, Container, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { useAuth } from "../hooks"
import Loading from "../components/Loading/Loading"

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
}))

const VerifiedAccount = () => {
  const classes = useStyles()
  const url = `${window.location.pathname}${window.location.search}`
  const { mutate, error, isError, isLoading } = useAuth({
    type: "verify",
    path: url,
  })

  useEffect(() => {
    mutate()
  }, [])
  return (
    <>
      <Loading open={isLoading} />
      <Container component="main" className={classes.main} maxWidth="sm">
        {!isLoading &&
          (isError ? (
            <Typography variant="h5" component="h2" gutterBottom>
              {error?.response.data.message}
            </Typography>
          ) : (
            <>
              <Typography variant="h5" component="h2" gutterBottom>
                Your account is Successfully verified
              </Typography>
              <Button
                variant="contained"
                color="primary"
                component={RouterLink}
                to="/home"
              >
                Go to Home
              </Button>
            </>
          ))}
      </Container>
    </>
  )
}

export default VerifiedAccount
