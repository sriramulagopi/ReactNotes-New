import { createContext, useState } from "react";
import LoginWrapper from "./LoginWrapper.js";
import LoggedWrapper from "./LoggedWrapper.js";
import "./style.css";

import { useSelector } from "react-redux";
export const AppContext = createContext();
const App = function () {
  const [isUserLogin, setisUserLogin] = useState(Boolean(localStorage.getItem("token")));
  if (!isUserLogin) {
    return <AppContext.Provider value={{setisUserLogin}}>
         <LoginWrapper/>
    </AppContext.Provider>
  }
  return <LoggedWrapper/>
};
export default App;