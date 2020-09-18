import React, {useEffect, useState} from 'react';
import './App.css';
import Login from '../src/Components/Login';
import { getTokenFromUrl } from './Config/spotify';
import spotify from 'spotify-web-api-js';
import Player from './Components/Player';
import { useStateProvider } from './Config/StateProvider';


const _spotify = new spotify();

function App() {


  const [{ user, token,playlist,weekly}, dispatch] = useStateProvider();

  useEffect(() => {
    const hash= getTokenFromUrl();
    window.location.hash = "";

    const _token = hash.access_token;

    if (_token) {

      dispatch({
        type: "SET_TOKEN",
        token: _token,
        })

      _spotify.setAccessToken(_token);

      _spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user : user,
        })
      })

      _spotify.getUserPlaylists().then((result) => {
        dispatch({
          type: "SET_PLAYLIST",
         playlist: result,
        })
      })

      dispatch({
        type: "SET_SPOTIFY",
        spotify: _spotify,
      });

      _spotify.getPlaylist('2Sgiw3obIOgG62tN6Q58XB').then((response) => {
        dispatch({
          type: "SET_WEEKLY",
          weekly : response,
         })
      })
    }

  }, [token, dispatch])
  // console.log(" 🥉", user)
  // console.log(" 💯", token)
   console.log(playlist);
  // console.log(weekly);

  
  



  return (
    <div className="app">

      {token ? <Player spotify={_spotify}/> : <Login />}

    </div>
  );
}

export default App;

