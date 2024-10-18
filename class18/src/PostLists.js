import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./thunk";
import { ApiStatus, setPosts } from "./store";
import request from "./request";

const Post = function ({ postInfo }) {
  const [bool, setBool] = useState(false);
  return (
    <div className="postLists" key={postInfo.id}>
      <h3 className="title">{postInfo.title}</h3>
      <p className="content">{postInfo.content}</p>
      <div className="items">
        <div className="item">
          <span className="material-icons">thumb_up</span>
          <b>{postInfo.likesCount}</b>
        </div>
        <div className="item">
          <span
            className="material-icons"
            onClick={() => {
              setBool(!bool);
            }}
          >
            chat
          </span>
          <b>{postInfo.commentsCount}</b>
        </div>
      </div>
      {bool && <div>This is comment box</div>}
    </div>
  );
};
const Posts = function () {
  const { apiStatus, data } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  console.log(data);
  useEffect(() => {
    dispatch(fetchPosts);
  }, []);
  if (apiStatus === ApiStatus.init || apiStatus === ApiStatus.pending) {
    return <p>Fetching Posts...</p>;
  }
  return (
    <div className="post">
      {data.map((post) => {
        return <Post key={post.id} postInfo={post} />;
      })}
    </div>
  );
};
export default Posts;
