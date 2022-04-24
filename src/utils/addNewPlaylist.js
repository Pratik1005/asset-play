import axios from "axios";
import {toast} from "react-toastify";
import {USER_ACTIONS} from "../reducer";

const addNewPlaylist = async (playlistName, token, dispatch) => {
  try {
    const response = await axios.post(
      "api/user/playlists",
      {playlist: {title: playlistName}},
      {headers: {authorization: token}}
    );
    dispatch({
      type: USER_ACTIONS.ADD_NEW_PLAYLIST,
      payload: response.data.playlists,
    });
    toast.success(`${playlistName} playlist created`);
  } catch (err) {
    toast.error("Error in creating playlist");
    console.error("add new playlist", err);
  }
};

export {addNewPlaylist};
