import { useSelector } from "react-redux";
import { Spin } from "antd";
import { useParams } from "react-router-dom";
import { useState } from "react";
const PostOffice = function () {
  const [state, setState] = useState("");
  const { details } = useParams();
  const { data } = useSelector((state) => state.a);
  // console.log(data[0])
  if (!data) {
    return (
      <div style={{ padding: "10px" }}>
        <Spin size="large" />
      </div>
    );
  }
  return (
    <div className="container">
      <h1>
        <b>Pincode:{details}</b>
      </h1>
      <h1>
        <b>Message:{data[0].Message}</b>
      </h1>
      <input
        type="text"
        placeholder="Filter"
        onInput={(e) => {
          setState(e.target.value);
        }}
      />
      <div className="postOffice">
        {data[0]?.PostOffice?.map((item) => {
          if (Filter(item.Name, state) || Filter(item.BranchType,state) || Filter(item.DeliveryStatus,state) || Filter(item.District,state) || Filter(item.Division,state)) {
            return (
              <div className="box" key={item.Name}>
                <p>Name : {item?.Name}</p>
                <p>Branch Type : {item?.BranchType}</p>
                <p>Delivery Status : {item?.DeliveryStatus}</p>
                <p>District : {item?.District}</p>
                <p>Division : {item?.Division}</p>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};
function Filter(item, state="") {
  return item.includes(state) ? true : false;
}
export default PostOffice;
