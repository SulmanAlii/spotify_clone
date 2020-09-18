import React from "react";
import "../css/body.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { useStateProvider } from "../Config/StateProvider";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Song from "./Song";
import MenuIcon from '@material-ui/icons/Menu';


const Body = ({spotify}) => {
  const [{ user, playlist, weekly }, dispatch] = useStateProvider();
  // console.log(user);

// Button click to play playlist(not working)
  const playPlaylist = () => {
    console.log("clicked");
    return (
      spotify.play({
        context_uri: `spotify:playlist:2Sgiw3obIOgG62tN6Q58XB`,
      }).then((response) => {
        spotify.getMyCurrentPlayingTrack().then((res) => {
          dispatch({
            type: 'SET_ITEM',
            item: res.item,
          });
          dispatch({
            type: 'SET_PLAYING',
            playing: true,
          });
        });
      })
    )
  }

  //button click to play song(not working)
  const playSong = (id) => {
    return (
      spotify.play(
        {
          uris: [`spotify:track:${id}`],
        }).then((response) => {
          spotify.getMyCurrentPlayingTrack().then((res) => {
            dispatch({
              type: 'SET_ITEM',
              item: res.item,
            });
            dispatch({
              type: 'SET_PLAYING',
              playing: true,
            });
          });
        })
  )
}

  // console.log(weekly);
  return (
    <div className="body">
      
      <div className="user_info">
        <img
          src={user?.images[0]?.url}
          className="user"
          alt=""
          style={{ width: "3rem", height: "2rem" }}
        />
        <div>
          <h4>{user?.display_name}</h4>
        </div>
      </div>
      <div className="main_song">
        <img src={weekly?.images[0]?.url} alt="" />
        <div className="song_detail">
          <h3>PLAYLIST</h3>
          <h1>{weekly?.name}</h1>
          {playlist?.total > 1 ? (
            <h3>{playlist?.total} playlists</h3>
          ) : (
            <h3>{playlist?.total} playlist</h3>
          )}
          <p>{weekly?.description}</p>
        </div>
      </div>

      <div className="songs_list">
        <div className="body_icons">
          <PlayCircleFilledIcon onClick={playPlaylist} className="play_icon" />
          <FavoriteBorderIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
      
          {weekly?.tracks.items.map((track) => {
            return (
              <>
                <Song  playSong={playSong}  track={track.track} />
              </>
            );
          })}      
      </div>
    </div>
  );
};

export default Body;
