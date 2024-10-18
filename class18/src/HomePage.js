import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./App";
import { useDispatch, useSelector } from "react-redux";
import { addNewPost, ApiStatus, commentIncrement, setUserInfo } from "./store";
import request from "./request";
import Posts from "./PostLists";
import { Form, Input, TextArea,Modal, Button } from "antd";

const HomePage = function () {
  const state = useSelector((state) => state.user);
  const { setUserLogin } = useContext(AuthContext);
  const [bool, setBool] = useState(false);
  const dispatch = useDispatch();
//   const logout = function () {
//     localStorage.removeItem("token");
//     setUserLogin(false);
//   };
  const show = function () {
    setBool(!bool);
  };
  const onFinish = async function(data){
    const payload = {title:data.title,content:data.content,imageUrls:[data.imageurl]}
    try{
      const httpConfig = {
        url:"https://node-auth-jwt-w78c.onrender.com/post/create",
        method:"POST",
        data:payload
      }
      const {success,data} = await request(httpConfig);
      if(success){
        dispatch(addNewPost(data[0]))
        dispatch(commentIncrement())
      }
    }
    catch(err){
      alert("Unable to create post")
    }
    setBool(!bool)
  }
  useEffect(() => {
    (async function () {
      dispatch(setUserInfo({ apiStatus: "pending" }));
      const httpConfig = {
        url: "https://node-auth-jwt-w78c.onrender.com/user/info",
        method: "GET",
      };
      const { success, data } = await request(httpConfig);
      dispatch(
        setUserInfo({
          apiStatus: success ? ApiStatus.success : ApiStatus.pending,
          data,
        })
      );
    })();
  }, []);
  if (
    state.apiStatus == ApiStatus.init ||
    state.apiStatus == ApiStatus.pending
  ) {
    return <h1>Fetching data.......</h1>;
  }
  return (
    <section className="homeWrapper">
      <div className="profile">
        <div className="items">
          <div className="createPost" onClick={show}>
            <span className="material-icons">add</span>
          </div>
          <div className="item">
            <b>{state.data.followers}</b>
            <span>Followers</span>
          </div>
          <div className="item">
            <b>{state.data.following}</b>
            <span>Following</span>
          </div>
          <div className="item">
            <b>{state.data.posts}</b>
            <span>Posts</span>
          </div>
        </div>
        <div>
          {state.data.gender === "MALE" ? "He/Him" : "She/Her"}
          <p>{state.data.name}</p>
          <p>{state.data.email}</p>
        </div>
        {bool && (
          <Modal open={bool} footer={null} closable={false} className="createPost">
            <Form onFinish={onFinish}>
              <Form.Item
                name="title"
                rules={[{ required: true, message: "Post title is required" }]}
              >
                <Input placeholder="Post Title" />
              </Form.Item>
              <Form.Item name="content" rules={[{required:true,message:"Post Content is required"}]}>
                <Input.TextArea placeholder="Post content" />
              </Form.Item>
              <Form.Item name="imageurl" rules={[{type:"url",message:"Give valid url"}]}>
                <Input placeholder="Image URL"/>
              </Form.Item>
              <Button htmlType="submit">Create Post</Button>
            </Form>
          </Modal>
        )}
      </div>
      <Posts />
    </section>
  );
};
export default HomePage;
