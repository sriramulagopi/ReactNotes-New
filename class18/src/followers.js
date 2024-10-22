import { Spin } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchFollowers from "./fetchFollowers";

const Followers = function(){
    const dispatch = useDispatch();
    const {apiStatus} = useSelector(state=>state.connections.followers);
    useEffect(()=>{
        dispatch(fetchFollowers);
    },[])
    if(apiStatus==="pending" || apiStatus==="init"){
        return <Spin size="large" style={{padding:"20px"}}/>
    }
    return <div>
        <h1>Followers</h1>
    </div>
}
export default Followers;