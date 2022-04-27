import axios from "axios";
import {toast} from "react-toastify";
import {USER_ACTIONS} from "../reducer";

const removeFromWatchLater = async (videoId, token, dispatch) => {
  try {
    const response = await axios.delete(`api/user/watchlater/${videoId}`, {
      headers: {authorization: token},
    });
    dispatch({
      type: USER_ACTIONS.REMOVE_FROM_WATCH_LATER,
      payload: response.data.watchlater,
    });
    toast.success("Removed from watch later");
  } catch (err) {
    toast.error("Error in removing from watch later");
    console.error("remove from watch later", err);
  }
};

export {removeFromWatchLater};
