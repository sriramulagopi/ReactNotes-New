import { Button, Form, Input, Radio } from "antd";
import {Link, useNavigate} from "react-router-dom";
import endPoints from "./urls";
import fetchData from "./fetchData1";
const Signup = function(){
    const navigate = useNavigate();
    const onFinish = async function(data){
        const httpConfig = {
            url:endPoints.signup,
            data:data
        }
        await fetchData(httpConfig);
        navigate("/login");
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
            <Form.Item label="City" name="city" rules={[{required:true,message:"City is required"}]}>
                <Input placeholder="City"/>
            </Form.Item>
            <Form.Item label="Select Gender" name="gender" rules={[{required:true,message:"Gender is required"}]}>
                <Radio.Group>
                    <Radio value="MALE">Male</Radio>
                    <Radio value="FEMALE">Female</Radio>
                </Radio.Group>
            </Form.Item>
            <Button htmlType="submit">Signup</Button>
            <h4>Have an account ? <Link to="/login">Login</Link></h4>
        </Form>
    </div>
}
export default Signup;