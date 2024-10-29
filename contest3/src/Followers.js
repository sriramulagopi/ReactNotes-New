import { useState } from "react";
import endPoints from "./urls";
import { useDispatch, useSelector } from "react-redux";
import fetchData2 from "./fetchData2";
import { addFollowers } from "./store";
import { Button, Spin } from "antd";

const Followers = function(){
    const dispatch = useDispatch();
    const {apiStatus,data}=useSelector(state=>state.c.followers);
    console.log(data)
    useState(()=>{
        (async function(){
            dispatch(addFollowers({apiStatus:"pending",data:null}));
            const httpConfig = {
                url:endPoints.followersList,
                method:"GET",
            }
            const {success,data} = await dispatch(fetchData2(httpConfig));
            if(success){
                dispatch(addFollowers({apiStatus:success?"success":"Error",data:success?data:null}))
            }
        })()
    },[])
    if(apiStatus==="pending" || apiStatus==="init"){
        return <div className="spin">
            <Spin size="large"/>
        </div>
    }
    return <div className="suggestions">
        {data.map((item)=>{
            return <User3 item={item} key={item._id}/>
        })}
    </div>
}
export default Followers;
const User3 = function({item}){
    const isFollowing = item.following;
    return <div className="user">
        <p>{item.name}</p>
        <Button>{isFollowing?"Following":"Follow"}</Button>
    </div>

}