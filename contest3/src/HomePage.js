import {Outlet} from "react-router-dom";
const HomePage = function(){
    return <div className="HomePage">
        <div className="nav">Nav</div>
        <Outlet/>
    </div>
}
export default HomePage;