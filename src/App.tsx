import { Switch, Route } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import { indexRoutes, PrivateRoutes } from "./routes"
import Footer from "./components/Footer/Footer"

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
}))

function App() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Switch>
        {indexRoutes.map((prop) => {
          if (prop.type === "auth") {
            return (
              <PrivateRoutes
                path={prop.path}
                component={prop.component}
                key={prop.path}
              />
            )
          }
          return (
            <Route
              path={prop.path}
              component={prop.component}
              key={prop.path}
            />
          )
        })}
      </Switch>
      <Footer />
    </div>
  )
}

export default App
