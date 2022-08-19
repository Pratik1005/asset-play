import axios from "axios";
import {toast} from "react-toastify";
import {USER_ACTIONS} from "../reducer";

const addVideoToPlaylist = async (
  playlistId,
  title,
  video,
  token,
  dispatch
) => {
  try {
    const response = await axios.post(
      `/api/user/playlists/${playlistId}`,
      {video},
      {headers: {authorization: token}}
    );
    console.log("allPlaylist", response);
    dispatch({
      type: USER_ACTIONS.ADD_VIDEO_TO_PLAYLIST,
      payload: response.data.playlist,
    });
    toast.success(`Added video to ${title} playlist`);
  } catch (err) {
    toast.error(`Error in adding video to ${title} playlist`);
    console.error("add video to playlist", err);
  }
};

export {addVideoToPlaylist};
