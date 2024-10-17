import { Outlet } from "react-router-dom"
import Top from "./top.js";
import Bottom from "./bottom.js";
const Homepage = function(){
    return <div className="container">
        <Top/>
        <Outlet/>
        <Bottom/>
    </div>
}
export default Homepage;