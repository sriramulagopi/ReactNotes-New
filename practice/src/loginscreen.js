import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPage from "./loginpage.js";
import HomePage from "./homepage.js";
import SignUp from "./signup.js";
const LoginWrapper = function(){
    return <div>
        <BrowserRouter>
        <Routes>
            <Route path="" Component={HomePage}>
                <Route path="login" Component={LoginPage}/>
                <Route path="signup" Component={SignUp}/>
            </Route>
        </Routes>
        </BrowserRouter>
    </div>
}
export default LoginWrapper;