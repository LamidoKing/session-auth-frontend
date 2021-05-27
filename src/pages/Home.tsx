import CssBaseline from "@material-ui/core/CssBaseline"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import Container from "@material-ui/core/Container"
import { format } from "date-fns"
import { useUser } from "../hooks"
import useAuth from "../hooks/useAuth"
import Notification from "../components/Notification/Notification"
import Loading from "../components/Loading/Loading"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
  },
}))
const Home = () => {
  const classes = useStyles()
  const {
    data: { user },
  } = useUser()

  const {
    mutate,
    error,
    data: res,
    isError,
    isLoading,
    isSuccess,
  } = useAuth({
    type: "resendVerification",
    path: "/email/resend",
  })

  const handleResendVerification = (data: any) => {
    mutate(data)
  }

  const convertDate = (date: string) => format(new Date(date), "PPPPppp")
  return (
    <>
      <Notification
        isError={isError || isSuccess}
        message={error?.response.data.message || res?.message}
      />
      <Loading open={isLoading} />
      <Container component="main" className={classes.main} maxWidth="sm">
        <CssBaseline />
        <Typography variant="h2" component="h1" gutterBottom>
          {`Hello ${user.name}`}
        </Typography>
        {user.verifiedAt ? (
          <>
            <Typography variant="h5" component="h2" gutterBottom>
              Your account is Verified
            </Typography>
            <Typography variant="body1">
              {`Verified At: ${convertDate(user.verifiedAt)}`}
            </Typography>
          </>
        ) : (
          <>
            <Typography variant="h5" component="h2" gutterBottom>
              Your account is Not verified check Email you provide during
              registration to verified your account
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleResendVerification({ email: user.email })}
            >
              Resend Verification
            </Button>
          </>
        )}
      </Container>
    </>
  )
}

export default Home
