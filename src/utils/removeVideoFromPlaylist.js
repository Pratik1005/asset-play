import axios from "axios";
import {toast} from "react-toastify";

const removeVideoFromPlaylist = async (
  playlistId,
  videoId,
  token,
  dispatch
) => {
  try {
    const response = await axios.delete(
      `api/user/playlists/${playlistId}/${videoId}`,
      {headers: {authorization: token}}
    );
    toast.success("Video removed successfully");
    dispatch({
      type: "REMOVE_VIDEO_FROM_PLAYLIST",
      payload: response.data.playlist,
    });
  } catch (err) {
    console.error("Remove video from playlist", err);
    toast.error("Error in removing video");
  }
};

export {removeVideoFromPlaylist};
