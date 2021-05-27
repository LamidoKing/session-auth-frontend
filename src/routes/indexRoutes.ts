import SignUp from "../pages/SignUp"
import Login from "../pages/Login"
import Home from "../pages/Home"
import ForgetPassword from "../pages/ForgetPassword"
import VerifiedAccount from "../pages/VerifiedAccount"

const indexRoutes = [
  { path: "/register", component: SignUp },
  { path: "/login", component: Login },
  { path: "/forgetpassword", component: ForgetPassword },
  { path: "/email/verify", component: VerifiedAccount },
  { path: "/", type: "auth", component: Home },
]

export default indexRoutes
