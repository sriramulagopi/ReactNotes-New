import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ApiStatus } from "./store";
import { Button, Spin } from "antd";
import { fetchSuggestions, updateConnection } from "./fetchFollowers";

const Suggestions = function () {
  const { apiStatus, users } = useSelector(
    (state) => state.connections.suggestions
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSuggestions);
  }, []);
  if (apiStatus === ApiStatus.init || apiStatus === ApiStatus.pending) {
    return <Spin size="large" />;
  }
  return (
    <div className="suggestions">
      {users.map((item) => {
        return <User key={item._id} data={item} />;
      })}
    </div>
  );
};
const User = function ({ data }) {
    const dispatch = useDispatch();
    const pendingConnections = useSelector(state=>state.connections.pendingConnections);
  const isFollowing = data.following;
  const onClickbtn = function(){
    dispatch(updateConnection(data._id,data.following));
  }
  return (
    <div className="user">
      <p>{data.name}</p>
      <Button loading={pendingConnections[data._id]} onClick={onClickbtn}>{isFollowing ? "Following" : "Follow"}</Button>
    </div>
  );
};
export default Suggestions;
