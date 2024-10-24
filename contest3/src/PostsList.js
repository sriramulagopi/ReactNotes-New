import { useEffect, useState } from "react";
import endPoints from "./urls";
import { useDispatch, useSelector } from "react-redux";
import fetchData2 from "./fetchData2.js";
import { userData2 } from "./store.js";
import CommentList from "./comments.js";

const PostsLists = function () {
  const dispatch = useDispatch();
  const { apiStatus, data } = useSelector((state) => state.b.userPosts);
  console.log(data);
  console.log(apiStatus);
  useEffect(() => {
    (async function () {
      dispatch(userData2({ apiStatus: "pending", data: null }));
      const httpConfig = {
        url: endPoints.postsList,
        method: "GET",
      };
      const { success, data } = await dispatch(fetchData2(httpConfig));
      if (success) {
        dispatch(
          userData2({
            apiStatus: success ? "success" : "Error",
            data: data ? data : null,
          })
        );
      }
    })();
  }, []);
  if (!data) {
    return <h3>FetchingData...</h3>;
  }
  return (
    <div className="posts">
      {data.map((item) => {
        return <CommentList item={item} key={item._id} />;
      })}
    </div>
  );
};
export default PostsLists;
