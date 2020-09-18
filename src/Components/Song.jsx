import React from "react";
import "../css/Song.css";

function Song({ track, playSong }) {

  // const playSongg = () =>  playSong(track.id)
  // console.log(track.id);

  return (
    
    <div
      className="each_Song"
      onClick={() => playSong(track.id)}
      style={{ marginBottom: "1rem", display: "flex" }}>

      <img
        src={track.album.images[0].url}
        alt="img"
        style={{ height: "3rem", marginRight: "1rem" }} />
      
      <div>
        <h2>{track.name}</h2>
        <p>
          {track.artists.map((artist) => {
            {/* console.log(artist); */}
            return <>{artist.name}</>;
          })}
        </p>
      </div>

    </div>
  );
}

export default Song;
