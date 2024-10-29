import {BrowserRouter,Routes,Route, Outlet} from "react-router-dom";
import LoggedUser from "./LoggedUser.js";
import Connections from "./Connections.js";
import Followers from "./Followers.js";
import Following from "./Following.js";
import Suggestions from "./Suggestions.js";
const LoggedWrapper = function () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" Component={LoggedUser}/>
        <Route path="connections/:tabId" Component={Connections}/>
      </Routes>
    </BrowserRouter>
  );
};
export default LoggedWrapper;
