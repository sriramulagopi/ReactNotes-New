import {Button, Form,Input} from "antd";
import { Link, useNavigate} from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "./App";
const Login = function(){
    const navigate = useNavigate();
    const {setUserLogin} = useContext(AuthContext);
    const onFinish = async function(data){
        await axios({
            url:"https://node-auth-jwt-w78c.onrender.com/auth/login",
            method:"POST",
            data,
        }).then((data)=>{
            setUserLogin(true);
            localStorage.setItem("token",data.data.token);
            navigate("/")
        }).catch((error)=>{
            console.log(error)
        })
    }
    return <div className="form">
        <Form layout="vertical" onFinish={onFinish}>
            <Form.Item label="Email" name="email" rules={[{required:true,message:"Email is required"},{type:"email",message:"Password is required"}]}>
                <Input placeholder="Email"/>
            </Form.Item>
            <Form.Item label="Password" name="password" rules={[{required:true,message:"Password is required"}]}>
                <Input placeholder="Password"/>
            </Form.Item>
            <Button block htmlType="submit">Submit</Button>
            <h4>Don't have an account ? <Link to="/signup">Sign Up</Link></h4>
        </Form>
    </div>
}
export default Login;