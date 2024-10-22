import { useSelector } from "react-redux"
import request from "./request"
import { addPendingConnection, ApiStatus, removePendingConnections, updateFollowers, updateFollowStatusInsuggestions, updateSuggestions } from "./store";

const fetchFollowers = async (dispatch)=>{
    try{
        dispatch(updateFollowers({apiStatus:ApiStatus.pending}))
        const httpConfig = {
            url:"https://node-auth-jwt-w78c.onrender.com/user/followers",
            method:"GET"
        }
        const {success,data} = await request(httpConfig);
        if(success){
            dispatch(updateFollowers({apiStatus:ApiStatus.success,users:data}))
        }
        else{
            throw new Error("Failed to fetch")
        }
    }
    catch(error){
        alert(error.message);
        dispatch(updateFollowers({apiStatus:ApiStatus.error}))
    }
}
export const fetchSuggestions = async (dispatch)=>{
    try{
        dispatch(updateSuggestions({apiStatus:ApiStatus.pending,users:[]}))
        const httpConfig = {
            url:"https://node-auth-jwt-w78c.onrender.com/user/suggestions",
            method:"GET",
        }
        const {success ,data}= await request(httpConfig);
        if(success){
            dispatch(updateSuggestions({apiStatus:ApiStatus.success,users:data.suggestions}))
        }
        else{
            throw new Error("Failed to fetch")
        }
    }
    catch(error){
        alert(error.message);
        dispatch(updateSuggestions({apiStatus:ApiStatus.error}))
    }
}
export const updateConnection = (userId,isFollowing)=>{
    return async function (dispatch,getState) {
        try{
            dispatch(addPendingConnection(userId))
            const httpConfig = {
                url:isFollowing?"https://node-auth-jwt-w78c.onrender.com/user/unfollow":"https://node-auth-jwt-w78c.onrender.com/user/follow",
                method:"POST",
                data:{
                    userId
                }
            }
            const {success,data} = await request(httpConfig);
            if(success){
                dispatch(updateFollowStatusInsuggestions({userId,status:!isFollowing}))
            }

        }
        catch(error){

        }
        finally{
            dispatch(removePendingConnections(userId))
        }
    }
}
export default fetchFollowers;