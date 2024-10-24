import {BrowserRouter,Routes,Route} from "react-router-dom";
import HomePage from "./HomePage.js";
import Login from "./Login.js";
import Signup from "./Signup.js";
const LoginWrapper = function () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" Component={HomePage}>
          <Route path="login" Component={Login} />
          <Route path="signup" Component={Signup} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default LoginWrapper;