import axios from "axios";
import { loginStatus } from "./store";
const fetchData = function(httpConfig){
    return async (dispatch)=>{
        try{
            dispatch(loginStatus({apiStatus:"pending"}))
            const respondse = await axios({
                url:httpConfig.url,
                method:"POST",
                data:httpConfig.data,
            })
            dispatch(loginStatus({apiStatus:"success"}));
            if(httpConfig.url.slice(httpConfig.url.length-5,httpConfig.url.length)==="login"){
                localStorage.setItem("token",respondse.data.token);
            }
            return {success:true,data:respondse.data.token}
        }
        catch(err){
            dispatch(loginStatus({apiStatus:"Error",data:null}))
            console.log("Error occurred")
        }
    }
}
export default fetchData;