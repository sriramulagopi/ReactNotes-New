import { Tabs } from "antd";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import Followers from "./Followers";
import Following from "./Following";
import Suggestions from "./Suggestions";

const Connections = function () {
    const navigate = useNavigate();
  const { tabId } = useParams();
  const onChange =(e)=>{
    navigate(`/connections/${e}`)
  }
  return (
    <div className="connectionContainer">
      <Tabs
        defaultActiveKey={tabId}
        onChange={onChange}
        items={[
          {
            label: "Followers",
            key: "followers",
            children: <Followers/>,
          },
          {
            label:"Following",
            key:"following",
            children:<Following/>
          },
          {label:"Suggestions",
            key:"suggestions",
            children:<Suggestions/>
          }
        ]}
      />
    </div>
  );
};
export default Connections;
