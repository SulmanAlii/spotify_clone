import React from "react";
import SideBar from "./SideBar";
import Body from "./Body";
import Footer from "./Footer";
import "../css/player.css";


//PAGE After login
const Player = ({spotify}) => {
  return (
    <>
      <div>
        <div className="MainContent">
          <SideBar />
          <Body spotify={spotify}/>
        </div>
        <Footer spotify={spotify}/>
      </div>
    </>
  );
};

export default Player;
