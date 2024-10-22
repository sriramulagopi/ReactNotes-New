import { useContext } from "react";
import { AppContext } from "./Homepage";
import { useNavigate } from "react-router-dom";
const Profile = function({setUser}){
    const {setState,state}= useContext(AppContext);
    const navigate = useNavigate();
    let data = JSON.parse(localStorage.getItem("user"));
    if(!data){
        return <div>
            <h1>You have to signup</h1>
        </div>
    }
    const logout = function(){
        let user = localStorage.removeItem("user");
        setState({...state,bool2:false});
        setUser(user);
        navigate("/")
    }
    return <div className="profile">
        <div className="details">
            <h1>Profile</h1>
            <h2>Full Name : {data.obj.Name}</h2>
            <h2>Email : {data.obj.Email}</h2>
            <h2>Password : {data.obj.Password}</h2>
            <button onClick={logout}>Logout</button>
        </div>
    </div>
}
export default Profile;