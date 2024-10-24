import axios from "axios";
import { userData } from "./store";
const fetchData2 = function(httpConfig){
    return async (dispatch,getState)=>{
        try{
            const respondse = await axios({
                url:httpConfig.url,
                method:httpConfig.method,
                ...(httpConfig.data && {data:httpConfig.data}),
                ...(httpConfig.params && {params:httpConfig.params}),
                headers:{
                    Authorization:`Bearer :${localStorage.getItem("token")}`
                },
            })
            return {success:true,data:respondse.data}

        }
        catch(err){
            console.log("Error occured")
            return {success:false,data:null}
        }
    }
}
export default fetchData2;