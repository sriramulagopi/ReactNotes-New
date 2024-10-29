import { useDispatch, useSelector } from "react-redux";
import {useEffect} from "react";
import endPoints from "./urls";
import fetchData2 from "./fetchData2";
import { Empty, Spin } from "antd";
import { addSuggestions } from "./store";
import User from "./user.js";
const Suggestions = function(){
    const dispatch = useDispatch()
    const {apiStatus,data}=useSelector(state=>state.c.suggestions);
    useEffect(()=>{
        (async function(){
            dispatch(addSuggestions({apiStatus:"pending",data:null}))
            const httpConfig = {
                url:endPoints.suggestionsList,
                method:"GET",
            }
            const {success,data}=await dispatch(fetchData2(httpConfig));
            dispatch(addSuggestions({apiStatus:success?"success":"Error",data:success?data.suggestions:null}))
        }())     
    },[])
    if(apiStatus==="init" || apiStatus==="pending"){
        return <div className="spin"><Spin size="large"/></div>
    }
    return <div className="suggestions">
        {data.length===0?<Empty description="No Suggestions found for you"/>:
        data.map((item)=>{
            return <User item={item} key={item._id}/>
        })}
    </div>
}
export default Suggestions;