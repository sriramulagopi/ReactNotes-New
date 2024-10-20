import { useEffect, useState } from "react";
import fetchData, { fetchData2 } from "./fetchData";
import { useDispatch, useSelector } from "react-redux";
import {Modal, Input, Spin, Form, Button } from "antd";
import Posts from "./Posts";
const LoggedWrapper = function () {
  const [bool,setBool]= useState(false);
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.b);
  console.log(data);
  useEffect(() => {
    const httpConfig = {
      url: "/user/info",
    };
    dispatch(fetchData2(httpConfig));
  }, []);
  if (!data) {
    return <Spin style={{ padding: "40px" }} size="large" />;
  }
  return (
    <div className="container">
      <div className="userInfoData">
        <div className="userInfo">
          <button className="material-icons" onClick={()=>setBool(true)}>add</button>
          <div>
            <b>{data.followers}</b>
            <h3>Followers</h3>
          </div>
          <div>
            <b>{data.following}</b>
            <h3>Following</h3>
          </div>
          <div>
            <b>{data.posts}</b>
            <h3>Posts</h3>
          </div>
        </div>
        <div>
          <p>{data.gender === "MALE" ? "He/Him" : "She/Her"}</p>
          <p>{data.name}</p>
          <p>{data.email}</p>
        </div>
        {bool && <Model bool={bool} setBool={setBool} dispatch={dispatch}/>}
      </div>
      {data && <Posts/>}
    </div>
  );
};


const Model = function({bool,dispatch,setBool}){
    const onFinish = function(data){
        const httpConfig = {
            url:"/post/create",
            data:{...data,imageurl:[data.imageurl]}
        };
        dispatch(fetchData(httpConfig));
        setBool(false)
    }
    return <Modal open={bool} footer={null} closable={false}>
        <Form onFinish={onFinish}>
            <Form.Item name="title" rules={[{required:true,message:"Post title is required"}]}>
                <Input placeholder="Post Title"/>
            </Form.Item>
            <Form.Item name="content" rules={[{required:true,message:"Post content is required"}]}>
                <Input.TextArea placeholder="Post Context"/>
            </Form.Item>
            <Form.Item name="imageurl" rules={[{required:true,message:"Imageurl is mandatory"}]}>
                <Input placeholder="Image URL"/>
            </Form.Item>
            <Button htmlType="submit">Create Post</Button>
        </Form>
    </Modal>
}
export default LoggedWrapper;
