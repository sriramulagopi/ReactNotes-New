import { useContext, useState } from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Homepage from "./Homepage";
import Signup from "./signup.js";
import Profile from "./profile.js";
import "./style.css";
const App = function () {
  const [user, setUser] = useState(Boolean(localStorage.getItem("user")));
  console.log(user);
  if (!user) {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="" element={<Homepage setUser={setUser}/>}>
              <Route path="/" Component={Signup}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
  return <div>
    <BrowserRouter>
    <Routes>
      <Route path="" Component={Homepage}>
        <Route path="user/:username" element={<Profile setUser={setUser}/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  </div>
};
export default App;
