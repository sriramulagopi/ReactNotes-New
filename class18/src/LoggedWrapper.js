import {BrowserRouter,Routes,Route} from "react-router-dom";
import HomePage from "./HomePage.js";
const LoggedWrapper = function(){
    return <div>
        <BrowserRouter>
        <Routes>
            <Route path="" Component={HomePage}/>
        </Routes>
        </BrowserRouter>
    </div>
}
export default LoggedWrapper;