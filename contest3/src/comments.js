import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import endPoints from "./urls";
import fetchData2 from "./fetchData2";
import { addcomments2 } from "./store";

const CommentList = function ({ item }) {
    const dispatch = useDispatch();
  const [showComments, setShowComments] = useState(false);
  const {postId,data} = useSelector(state=>state.b.comments);
  const onClick = async function(){
    setShowComments(!showComments)
    if(postId!==item._id){
        const httpConfig = {
            url:endPoints.CommentLists,
            method:"GET",
            params:{postId:item._id}
        }
        const {success,data}= await dispatch(fetchData2(httpConfig));
        if(success){
            dispatch(addcomments2({postId:item._id,data:data}))
        }
    }
  };
  return (
    <div className="post">
      <h2>{item.title}</h2>
      <p>{item.content}</p>
      <div className="commentsLikes">
        <div>
          <span className="material-icons">thumb_up</span>
          <span>0</span>
        </div>
        <div>
          <span className="material-icons" onClick={onClick}>
            comment
          </span>
          <span>0</span>
        </div>
      </div>
      {showComments && (
        data[0]?<h3>Comments</h3>:<h3>No Comments</h3>
      )}
    </div>
  );
};
export default CommentList;
