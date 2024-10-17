import {Button, Form,Input, Radio} from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Singup = function(){
    const navigate = useNavigate()
    const onFinish = async function(data){
        await axios({
            url:"https://node-auth-jwt-w78c.onrender.com/auth/signup",
            method:"POST",
            data
        }).then((data)=>{
            alert("Signed Up process done successfully");
            navigate("/login");
        }).catch((error)=>{
            console.log(error)
        })
    }
    return <div className="form">
        <Form layout="vertical" onFinish={onFinish}>
            <Form.Item label="Name" name="name" rules={[{required:true,message:"Name is required"}]}>
                <Input placeholder="Name"/>
            </Form.Item>
            <Form.Item label="Email" name="email" rules={[{required:true,message:"Email is required"},{type:"email",message:"Enter valid email"}]}>
                <Input placeholder="Email"/>
            </Form.Item>
            <Form.Item label="Password" name="password" rules={[{required:true,message:"Password is required"}]}>
                <Input.Password placeholder="Password"/>
            </Form.Item>
            <Form.Item label="Select Gender" name="gender" rules={[{required:true,message:"gender is required"}]}>
                <Radio.Group>
                    <Radio value="MALE">Male</Radio>
                    <Radio value="FEMALE">Female</Radio>
                </Radio.Group>
            </Form.Item>
            <Form.Item label="City" name="city" rules={[{required:true,message:"City is required"}]}>
                <Input placeholder="City"/>
            </Form.Item>
            <Button block htmlType="submit">Sign Up</Button>
            <h4>Have an Account ? <Link to="/login">Login</Link></h4>
        </Form>
    </div>
}
export default Singup;