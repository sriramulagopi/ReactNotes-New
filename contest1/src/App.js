import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage.js";
import PostOffice from "./PostOffice.js";
import "./style.css"
const App = function () {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="" Component={HomePage}/>
          <Route path="pincode/:details" Component={PostOffice}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
