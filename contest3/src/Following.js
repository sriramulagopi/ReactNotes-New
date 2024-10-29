import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFollowing, addPendingConnections, removePendingConnection, updateFollowing } from "./store";
import endPoints from "./urls";
import fetchData2 from "./fetchData2";
import { Button, Empty, Spin } from "antd";
import User from "./user";

const Following = function(){
    const dispatch = useDispatch();
    const {apiStatus,data} = useSelector(state=>state.c.following)
    useState(()=>{
        (async function(){
            dispatch(addFollowing({apiStatus:"pending",data:null}));
            const httpConfig = {
                url:endPoints.followingsList,
                method:"GET",
            }
            const {success,data}= await dispatch(fetchData2(httpConfig));
            if(success){
                dispatch(addFollowing({apiStatus:success?"success":"error",data:success?data:null}))
            }
        })()
    },[])
    if(apiStatus==="pending" || apiStatus==="init"){
        return <div className="spin">
            <Spin size="large"/>
        </div>
    }
    return <div className="suggestions">
        {data.length===0?<Empty description="No following found for you"/>:
        data.map((item)=>{
            return <User2 item={item} key={item._id}/>
        })}
    </div>
}
export default Following;

const User2 = function({item}){
    const dispatch = useDispatch()
    const {pendingConnection} = useSelector(state=>state.c)
    const isFollowing = item.following;
    const onClick = async function(){
        dispatch(addPendingConnections(item._id));
        const httpConfig = {
            url:isFollowing?endPoints.unfollow:endPoints.follow,
            method:"POST",
            data:{userId:item._id}
        }
        const {success,data} = await dispatch(fetchData2(httpConfig));
        if(success){
            dispatch(removePendingConnection(item._id));
            dispatch(updateFollowing({userId:item._id,status:!isFollowing}))
        }
        else{
            dispatch(removePendingConnection(item._id));
        }
    }
    return <div className="user">
        <p>{item.name}</p>
        <Button onClick={onClick} loading={pendingConnection[item._id]}>{isFollowing?"Following":"Follow"}</Button>
    </div>
}