import axios from "axios";
import { useDispatch } from "react-redux";
import { addPost, postsData, uponLogin, userData } from "./store";
export const apiStatus = {
    status:"init",
}
const fetchData = (httpConfig)=>{
    return async (dispatch,getState)=>{
        try{
            apiStatus.status="pending";
            const respondse = await axios({
                url:`https://node-auth-jwt-w78c.onrender.com${httpConfig.url}`,
                method:"POST",
                data:httpConfig.data,
                headers:(localStorage.getItem("token") && {
                     Authorization: `Bearer :${localStorage.getItem("token")}`
                }),
            })
            apiStatus.status="success";
            if(httpConfig.url==="/auth/login"){
                dispatch(uponLogin({data:respondse.data}))
            }
            if(httpConfig.url==="/post/create"){
                dispatch(addPost(respondse.data.post))
            }
            console.log(respondse.data)
        }
        catch(err){
            apiStatus.status="Error";
            console.log(apiStatus.status);
        }
    }
}
export const fetchData2 = (httpConfig)=>{
    return async(dispatch)=>{
        try{
            apiStatus.status="pending";
            const respondse = await axios({
                url:`https://node-auth-jwt-w78c.onrender.com${httpConfig.url}`,
                method:"GET",
                headers:{
                    Authorization:`Bearer :${localStorage.getItem("token")}`,
                }
            })
            apiStatus.status="success";
            if(httpConfig.url==="/user/info"){
                dispatch(userData({data:respondse.data}))
            }
            if(httpConfig.url==="/post/all"){
                dispatch(postsData({data:respondse.data}))
            }
        }
        catch(err){
            apiStatus.status="Error";
            console.log(err);
        }
    }
}
export default fetchData;