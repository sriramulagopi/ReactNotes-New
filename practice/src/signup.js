import { Button, Form, Input, message, Radio } from "antd";
import { Link } from "react-router-dom";
import fetchData from "./fetchData";
import { useDispatch } from "react-redux";

const SignUp = function(){
    const dispatch = useDispatch();
    const onFinish = function(data){
        const httpConfig = {
            url:"/auth/signup",
            data:data,
        }
        dispatch(fetchData(httpConfig));
    }
    return <div className="form">
        <Form layout="vertical" onFinish={onFinish}>
            <Form.Item label="Name" name="name" rules={[{required:true,message:"Name is required"}]}>
                <Input placeholder="Name"/>
            </Form.Item>
            <Form.Item label="Email" name="email" rules={[{required:true,message:"Email is required"},{type:"email",message:"Enter valid email"}]}>
                <Input placeholder="Email"/>
            </Form.Item>
            <Form.Item label="Password" name="password" rules={[{required:true,message:"Password must and should"}]}>
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
            <Button htmlType="submit" block>Sign Up</Button>
            <h4>Have an acount ? <Link to="/login">Login</Link></h4>
        </Form>
    </div>
}
export default SignUp;