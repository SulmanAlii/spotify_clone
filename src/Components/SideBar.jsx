import React, { useEffect, useState } from "react";
import "../css/sidebar.css";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import PlayList from "./PlayList";
import { useStateProvider } from "../Config/StateProvider";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from '@material-ui/icons/Close';

const SideBar = () => {
  const [state, setstate] = useState(false);
  const [{ playlist, weekly}, dispatch] = useStateProvider();

  const MenuBtn = () => {
    setstate(true);
    console.log("hola");
  };
  const MenuBtn2 = () => {
    setstate(false);
  };

 
  return (
    <div>
      <MenuIcon
            className="MenuIcon"
            onClick={MenuBtn}
            
          >
        
      </MenuIcon>
      <div className="sidebar">
  

          <img
            className="spotifyLogo"
            src="https://sertv.gob.pa/crisolfm/wp-content/uploads/sites/2/2019/12/logo-spotify-1.jpg"
            alt=""
          />

          <div className="menu">
            <p className="options">Home</p>
            <HomeIcon />
          </div>
          <div className="menu">
            <p className="options">Search</p>
            <SearchIcon />
          </div>
          <div className="menu">
            <p className="options">Your Library</p>
            <LibraryMusicIcon />
          </div>

          <strong className="title_playlist">PLAYLIST</strong>
          <hr />
          <PlayList title="Hip-Hop" />
          <PlayList title="Rap" />
          <PlayList title="RnB" />

          {playlist?.items?.map((playlist) => {
            {/* console.log(weekly) */}
            return <PlayList title={playlist.name} />;
          })}
        </div>

      
      {
        state ? 

        <div className="sidebar" style={{ display: "block" }}>
        <CloseIcon
            className="MenuIcon2"
            onClick={MenuBtn2}
            
          >
          
          </CloseIcon>

          <img
            className="spotifyLogo"
            src="https://sertv.gob.pa/crisolfm/wp-content/uploads/sites/2/2019/12/logo-spotify-1.jpg"
            alt=""
          />

          <div className="menu">
            <p className="options">Home</p>
            <HomeIcon />
          </div>
          <div className="menu">
            <p className="options">Search</p>
            <SearchIcon />
          </div>
          <div className="menu">
            <p className="options">Your Library</p>
            <LibraryMusicIcon />
          </div>

          <strong className="title_playlist">PLAYLIST</strong>
          <hr />
          <PlayList title="Hip-Hop" />
          <PlayList title="Rap" />
          <PlayList title="RnB" />

          {playlist?.items?.map((playlist) => {
            return <PlayList title={playlist.name} />;
          })}
        </div>

          :
          <div>

          </div>


          
      }
     
    </div>
  );
};

export default SideBar;
