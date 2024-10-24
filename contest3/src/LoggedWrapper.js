import {BrowserRouter,Routes,Route} from "react-router-dom";
import LoggedUser from "./LoggedUser.js"
const LoggedWrapper = function () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" Component={LoggedUser}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default LoggedWrapper;
