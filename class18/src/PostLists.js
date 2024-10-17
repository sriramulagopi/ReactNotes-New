import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./thunk";
import { ApiStatus, setPosts } from "./store";
import request from "./request";

const Posts = function(){
    const {apiStatus,data} = useSelector(state=>state.post);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchPosts)
    },[])
    if(apiStatus===ApiStatus.init || apiStatus===ApiStatus.pending){
        return <p>Fetching Posts...</p>
    }
    return <div>
        <h1>Lists of posts are shown below</h1>
    </div>
}
export default Posts;