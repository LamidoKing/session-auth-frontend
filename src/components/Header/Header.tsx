import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import { useAuth } from "../../hooks"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      backgroundColor: "white",
    },
    logoutButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      color: "black",
    },
  })
)

const Header = () => {
  const classes = useStyles()
  const { mutate } = useAuth({
    type: "logout",
    path: "/logout",
  })

  const handleClick = () => {
    mutate()
  }

  return (
    <>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Node Auth
          </Typography>
          <Button className={classes.logoutButton} onClick={handleClick}>
            LogOut
          </Button>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header
