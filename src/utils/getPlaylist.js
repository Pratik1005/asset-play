import axios from "axios";

const getPlaylist = async (token) => {
  const response = await axios.get("api/user/playlists", {
    headers: {authorization: token},
  });
  return response.data.playlists;
};

export {getPlaylist};
