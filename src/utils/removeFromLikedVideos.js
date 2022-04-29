import axios from "axios";
import {toast} from "react-toastify";
import {USER_ACTIONS} from "../reducer";

const removeFromLikedVideos = async (videoId, token, dispatch) => {
  try {
    const response = await axios.delete(`/api/user/likes/${videoId}`, {
      headers: {authorization: token},
    });
    dispatch({
      type: USER_ACTIONS.LIKED_VIDEOS_ACTIONS,
      payload: response.data.likes,
    });
    toast.success("Removed from liked video");
  } catch (err) {
    console.error("remove from liked videos", err);
  }
};

export {removeFromLikedVideos};
