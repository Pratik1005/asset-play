import axios from "axios";
import {toast} from "react-toastify";
import {getPlaylist} from "./index";

const addVideoToPlaylist = async (title, video, token, dispatch) => {
  const playlist = await getPlaylist(token);
  const currentPlaylist = playlist.filter((item) => item.title === title);
  const playlistId = currentPlaylist[0]._id;
  try {
    const response = await axios.post(
      `api/user/playlists/${playlistId}`,
      {video},
      {headers: {authorization: token}}
    );
    dispatch({type: "ADD_VIDEO_TO_PLAYLIST", payload: response.data.playlist});
    toast.success(`Added video to ${title} playlist`);
    return response.data.playlist;
  } catch (err) {
    toast.error(`Error in adding video to ${title} playlist`);
    console.error("add video to playlist", err);
  }
};

export {addVideoToPlaylist};
