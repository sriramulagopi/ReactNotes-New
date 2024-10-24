import { useEffect, useState } from "react";
import endPoints from "./urls";
import { useDispatch, useSelector } from "react-redux";
import fetchData2 from "./fetchData2";
import { Button, Form, Input, message, Modal, Spin } from "antd";
import "./style2.css";
import PostsLists from "./PostsList.js";
import { addComment, userData } from "./store.js";
import axios from "axios";
const LoggedUser = function () {
  const [bool, setBool] = useState(false);
  const { apiStatus, data } = useSelector((state) => state.b.userDetails);
  const dispatch = useDispatch();
  useEffect(() => {
    (async function () {
      dispatch(userData({ apiStatus: "pending", data: null }));
      const httpConfig = {
        url: endPoints.userInfo,
        method: "GET",
      };
      const { success, data } = await dispatch(fetchData2(httpConfig));
      if (success) {
        dispatch(
          userData({
            apiStatus: success ? "success" : "Error",
            data: data ? data : null,
          })
        );
      }
    })();
  }, []);
  const onFinish = async function (data1) {
    const data2 = {
      title: data1.title,
      content: data1.content,
      imageUrls: [data1.imageurl],
    };
    const httpConfig = {
      url: endPoints.createPost,
      method: "POST",
      data: data2,
    };
    const { success, data } = await dispatch(fetchData2(httpConfig));
    if (success) {
      dispatch(addComment(data))
    }
    setBool(false);
  };
  if (apiStatus === "init" || apiStatus === "pending") {
    return (
      <div className="LoggedUser">
        <div className="Spin">
          <Spin size="large" />
        </div>
      </div>
    );
  }
  return (
    <div className="LoggedUser">
      <div className="userData">
        <div className="items">
          <button
            className="material-icons"
            onClick={() => {
              setBool(true);
            }}
          >
            add
          </button>
          <div>
            <b>{data.followers}</b>
            <b>Followers</b>
          </div>
          <div>
            <b>{data.following}</b>
            <b>Following</b>
          </div>
          <div>
            <b>{data.posts}</b>
            <b>Posts</b>
          </div>
        </div>
        <div className="userName">
          <b>{data.gender === "MALE" ? "HE/HIM" : "SHE/HER"}</b>
          <b>{data.name}</b>
          <b>{data.email}</b>
        </div>
        {bool && (
          <Modal
            classNames="modal"
            open={bool}
            footer={null}
            closable={false}
            className="modal"
          >
            <Form onFinish={onFinish} className="form">
              <span
                className="span1"
                onClick={() => {
                  setBool(false);
                }}
              >
                &times;
              </span>
              <Form.Item
                name="title"
                rules={[{ required: true, message: "Title is required" }]}
              >
                <Input placeholder="Title" />
              </Form.Item>
              <Form.Item
                name="content"
                rules={[
                  { required: true, message: "Post discription is required" },
                ]}
              >
                <Input.TextArea placeholder="Post Content" />
              </Form.Item>
              <Form.Item
                name="imageurl"
                rules={[
                  { required: true, message: "Image URL is required" },
                  { type: "url", message: "Invaild URL" },
                ]}
              >
                <Input placeholder="Image URL" />
              </Form.Item>
              <Button htmlType="submit">Create Post</Button>
            </Form>
          </Modal>
        )}
      </div>
      {data ? <PostsLists /> : <h1>Fetching Posts....</h1>}
    </div>
  );
};
export default LoggedUser;
