import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import HomePage from "./HomePage.js";
import Connections from "./connections.js";
const LoggedWrapper = function () {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="" Component={HomePage} />
          <Route path="/connections/:tabId" element={<Connections />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default LoggedWrapper;
