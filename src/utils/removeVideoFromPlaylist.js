import axios from "axios";
import {toast} from "react-toastify";

const removeVideoFromPlaylist = async (playlistId, videoId, token) => {
  try {
    const response = await axios.delete(
      `api/user/playlists/${playlistId}/${videoId}`,
      {headers: {authorization: token}}
    );
    console.log(response);
    toast.success("Video removed successfully");
  } catch (err) {
    console.error("Remove video from playlist", err);
    toast.error("Error in removing video");
  }
};

export {removeVideoFromPlaylist};
