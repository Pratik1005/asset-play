import axios from "axios";
import {toast} from "react-toastify";

const addNewPlaylist = async (playlistName, token) => {
  try {
    const response = await axios.post(
      "api/user/playlists",
      {playlist: {title: playlistName}},
      {headers: {authorization: token}}
    );
    console.log(response);
    toast.success(`${playlistName} playlist created`);
  } catch (err) {
    toast.error("Error in creating playlist");
    console.error("add new playlist", err);
  }
};

export {addNewPlaylist};
