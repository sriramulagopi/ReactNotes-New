import { useDispatch, useSelector } from "react-redux";
import endPoints from "./urls";
import { addPendingConnections, removePendingConnection, updateSuggestions } from "./store";
import fetchData2 from "./fetchData2";
import { Button } from "antd";

const User = function({item}){
    const {pendingConnection} = useSelector(state=>state.c)
    // console.log(pendingConnection);
    const dispatch = useDispatch()
    const isFollowing = item.following;
    const onClick =async function(){
        dispatch(addPendingConnections(item._id));
        const httpConfig = {
            url:isFollowing?endPoints.unfollow:endPoints.follow,
            method:"POST",
            data:{userId:item._id}
        }
        console.log(httpConfig)
        const {success,data}= await dispatch(fetchData2(httpConfig));
        if(success){
            console.log(data);
            dispatch(removePendingConnection(item._id))
            dispatch(updateSuggestions({userId:item._id,status:!isFollowing}));
        }
        else{
            dispatch(removePendingConnection(item._id))
        }
    }
    return <div className="user" key={item._id}>
        <p>{item.name}</p>
        <Button onClick={onClick} loading={pendingConnection[item._id]}>{isFollowing?"Following":"Follow"}</Button>
    </div>
}
export default User;