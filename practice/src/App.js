import { useState } from "react";
import LoggedWrapper from "./loggedscreen.js";
import LoginWrapper from "./loginscreen.js";
import "./style.css";
import { useSelector } from "react-redux";
const App = function(){
    const {status,data} = useSelector(state=>state.a);
    {status && localStorage.setItem("token",data?.token)}
    if(status || localStorage.getItem("token")){
        return <LoggedWrapper/>;
    }
    return <LoginWrapper/>;
}
export default App;