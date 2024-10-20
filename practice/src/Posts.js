import { useState } from "react";
import { fetchData2 } from "./fetchData";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "antd";

const Posts = function () {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.c);
  useState(() => {
    const httpConfig = {
      url: "/post/all",
    };
    dispatch(fetchData2(httpConfig));
  }, []);
  if (!data) {
    return <h3>Fetching posts data....</h3>;
  }
  return (
    <div className="posts">
      {data.map((post) => {
        return (
          <div className="post" key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <div className="items">
              <div>
                <span className="material-icons">chat</span>
                <b>{post.commentsCount}</b>
              </div>
              <div>
                <span className="material-icons">thumb_up</span>
                <span>{post.likesCount}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
