import axios from "axios"

const request = async (httpConfig)=>{
    const token = localStorage.getItem("token");
    try{
        const respondse = await axios({
            url:httpConfig.url,
            method:httpConfig.method,
            ...(httpConfig.data && {data:httpConfig.data}),
            headers:{
                Authorization: `Bearer :${token}`
            }
        })
        return {success:true,data:respondse.data}
    }
    catch(error){
        return {success:false,data:"Some error accured"}
    }
}
export default request;