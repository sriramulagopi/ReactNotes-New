import request from "./request"
import { ApiStatus, setPosts } from "./store"

export const fetchPosts = async (dispatch,getState)=>{
    const httpConfig = {
        url:"https://node-auth-jwt-w78c.onrender.com/post/all",
        method:"GET",
    }
    dispatch(setPosts({apiStatus:"pending"}))
    const {success,data}=await request(httpConfig);
    dispatch(setPosts({apiStatus:success?"success":"error",data}))
    console.log(data);
}