import {Form,Input,Button,} from "antd";
import { Link } from "react-router-dom";
import fetchData from "./fetchData";
import { useDispatch } from "react-redux";
const LoginPage = function(){
    const dispatch = useDispatch();
    const onFinish = function(data){
        const httpConfig = {
            url:"/auth/login",
            data:data,
        }
        dispatch(fetchData(httpConfig));
    }
    return <div className="form">
        <Form layout="vertical" onFinish={onFinish}>
            <Form.Item label="Email" name="email" rules={[{required:true,message:"Email is required"},{type:"email",message:"Enter valid email"}]}>
                <Input placeholder="Email"/>
            </Form.Item>
            <Form.Item label="Password" name="password" rules={[{required:true,message:"Password must and should"}]}>
                <Input.Password placeholder="Password"/>
            </Form.Item>
            <Button htmlType="submit" block>Login</Button>
            <h4>Don't have an acount ? <Link to="/signup">Sign Up</Link></h4>
        </Form>
    </div>
}
export default LoginPage;