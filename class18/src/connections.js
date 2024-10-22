import { Outlet, useNavigate, useParams } from "react-router-dom";
import { Tabs } from "antd";
import Followers from "./followers";
import Following from "./following";
import Suggestions from "./suggesstions";
const Connections = function () {
    const {tabId} = useParams();
    const navigate = useNavigate();
  return (
    <div>
      <Tabs
      defaultActiveKey={tabId}
      onChange={(key)=>{
        navigate(`/connections/${key}`)
      }}
        items={[
          {
            label: "Followers",
            key: "followers",
            children: <Followers/>,
          },
          {
            label: "Following",
            key: "following",
            children: <Following />,
          },
          { label: "Suggestions", key: "suggestions", children: <Suggestions/> },
        ]}
      />
      <Outlet />
    </div>
  );
};
export default Connections;
