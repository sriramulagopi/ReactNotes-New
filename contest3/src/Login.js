import {Form,Button,Input} from "antd";
import endPoints from "./urls";
import fetchData from "./fetchData1";
import { useNavigate,Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "./App";
import { useDispatch, useSelector } from "react-redux";
const Login = function(){
    const dispatch = useDispatch()
    const {apiStatus}= useSelector(state=>state.a);
    const  {setisUserLogin}= useContext(AppContext);
    const navigate = useNavigate()
    const onFinish = async (data1)=>{
        const httpConfig = {
            url:endPoints.login,
            data:data1,
        };
      const {success,data} = await dispatch(fetchData(httpConfig));
      if(success){
        localStorage.getItem("token",data);
        setisUserLogin(success);
        navigate("/");
      }
    }
    return <div className="form">
        <Form layout="vertical" onFinish={onFinish}>
            <Form.Item label="Email" name="email" rules={[{required:true,message:"Email is required"},{type:"email",message:"Enter valid email"}]}>
                <Input placeholder="Email"/>
            </Form.Item>
            <Form.Item label="Password" name="password" rules={[{required:true,message:"Password is required"}]}>
                <Input placeholder="Password"/>
            </Form.Item>
            <Button block htmlType="submit">Login</Button>
            <h4>Don't have an account ? <Link to="/signup">Sign Up</Link></h4>
        </Form>
    </div>
}
export default Login;