import React, { useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
const Sidebar = () => {
  //[1] creating functionality to extend/collapse the sidebar
  const [extended, setExtended] = useState(false);
  return (
    //[0] setting up outlay of sidebar first & styling
    <div className="sidebar">
      <div className="top">
        {/*implement functionality to extend/collapse the sidebar by onClickevent listener & menu icon*/}
        <img onClick={() => setExtended(prev=>!prev)} className="menu" src={assets.menu_icon} alt="" /> {/*set on the sidebar parent div and trickles down to its children*/}
        <div className="new-chat">
          <img src={assets.plus_icon} alt="" />
          {/*ternary operator to show/hide contents based on state*/}
          {extended ? <p>New Chat</p> : null}
        </div>
        <br />
        {/*ternary operator to show/hide contents based on state*/}
        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            <div className="recent-entry">
              <img src={assets.message_icon} alt="" />
              <p>What is react ...</p>
            </div>
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="" />
          {/*ternary operator to show/hide contents based on state*/}
          {extended ? <p>Help</p> : null}
        </div>
        <br />
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="" />
          {/*ternary operator to show/hide contents based on state*/}
          {extended ? <p>Activity</p> : null}
        </div>
        <br />
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          {/*ternary operator to show/hide contents based on state*/}
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
