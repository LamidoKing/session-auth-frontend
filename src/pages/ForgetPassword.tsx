import { Link as RouterLink } from "react-router-dom"
import Link from "@material-ui/core/Link"
import Avatar from "@material-ui/core/Avatar"
import Button from "@material-ui/core/Button"
import CssBaseline from "@material-ui/core/CssBaseline"
import TextField from "@material-ui/core/TextField"
import Grid from "@material-ui/core/Grid"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import { useAuth, useForm } from "../hooks"
import Notification from "../components/Notification/Notification"
import Loading from "../components/Loading/Loading"

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

export default function SignUp() {
  const classes = useStyles()
  const { values, handleChange } = useForm({
    initialState: { email: "" },
  })

  const {
    mutate,
    status,
    error,
    data: res,
    isError,
    isLoading,
  } = useAuth({
    type: "fogotPasssword",
    path: "/password/email",
  })

  const handleClick = (data: any) => {
    mutate(data)
  }

  return (
    <>
      <Notification isError={isError} message={error?.response.data.message} />
      <Loading open={isLoading} />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          {status === "success" ? (
            <>
              <Typography variant="h5" component="h2" gutterBottom>
                {res.message}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                className={classes.submit}
                component={RouterLink}
                to="/login"
              >
                ok
              </Button>
            </>
          ) : (
            <>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Forgot Password
              </Typography>
              <form className={classes.form} noValidate>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      onChange={handleChange("email")}
                    />
                  </Grid>
                </Grid>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={() => handleClick(values)}
                >
                  Reset Password
                </Button>
                <Grid container justify="flex-end">
                  <Grid item>
                    <Link component={RouterLink} to="/login" variant="body2">
                      Sign in
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </>
          )}
        </div>
      </Container>
    </>
  )
}
