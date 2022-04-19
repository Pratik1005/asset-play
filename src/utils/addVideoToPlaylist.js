import axios from "axios";
import {toast} from "react-toastify";
import {getPlaylist} from "./index";

const addVideoToPlaylist = async (title, video, token) => {
  const playlist = await getPlaylist(token);
  const currentPlaylist = playlist.filter((item) => item.title === title);
  const playlistId = currentPlaylist[0]._id;
  try {
    const reponse = await axios.post(
      `api/user/playlists/${playlistId}`,
      {video},
      {headers: {authorization: token}}
    );
    toast.success(`Added video to ${title} playlist`);
  } catch (err) {
    toast.error(`Error in adding video to ${title} playlist`);
    console.error("add video to playlist", err);
  }
};

export {addVideoToPlaylist};
