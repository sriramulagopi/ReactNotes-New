import { createContext, useState } from "react";
import { json, Outlet, useNavigate } from "react-router-dom";
export const AppContext = createContext();
const Homepage = function ({setUser}) {
    const navigate = useNavigate();
  const [state, setState] = useState({ bool1: false,bool2:false,bool3:false});
  const onSubmit = function (e) {
    e.preventDefault();
    if (e.currentTarget.password.value !== e.target.password2.value) {
        setState({...state,bool3:true});
        return;
    }
    setState({...state,bool2:false,bool2:true});
    const Name = e.currentTarget.name.value;
    const Email = e.currentTarget.email.value;
    const Password = e.currentTarget.password.value;
    const obj = {Name,Email,Password};
    let str = " ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz";
    let key = "";
    for (let i=0;i<16;i++){
        key+=str[parseInt(Math.random()*str.length)];
    }
    let data = JSON.stringify({key,obj});
    localStorage.setItem("user",data);
    setUser(true);
    navigate(`/user/${Name}`)
  };
  const onInput = function(e){
    if(e.currentTarget.name.value<1 || e.currentTarget.email.value<1 || e.currentTarget.password.value<1 || e.currentTarget.password2.value<1){
        setState({...state,bool1:true});
        return;    
    }
    setState({...state,bool1:false});
  }
  return (
    <AppContext.Provider value={{ onSubmit,state,onInput,setState }}>
      <div className="homepage">
        <div className="nav">
            <p>Header</p>
            <div>
                <p>Signup</p>
                <p>Profile</p>
            </div>
        </div>
        <Outlet />
      </div>
    </AppContext.Provider>
  );
};
export default Homepage;
