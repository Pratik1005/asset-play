import axios from "axios";
import {toast} from "react-toastify";
import {USER_ACTIONS} from "../reducer";

const addToLikedVideos = async (video, token, dispatch) => {
  try {
    const response = await axios.post(
      "api/user/likes",
      {video},
      {
        headers: {authorization: token},
      }
    );
    dispatch({
      type: USER_ACTIONS.ADD_TO_LIKED_VIDEOS,
      payload: response.data.likes,
    });
    toast.success("Added to liked videos");
  } catch (err) {
    toast.error("Error in adding to liked videos");
    console.error("Add to liked videos", err);
  }
};

export {addToLikedVideos};
