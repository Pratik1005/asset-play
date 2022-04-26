import axios from "axios";
import {toast} from "react-toastify";
import {USER_ACTIONS} from "../reducer";

const addToWatchLater = async (video, token, dispatch) => {
  try {
    const response = await axios.post(
      "api/user/watchlater",
      {video},
      {headers: {authorization: token}}
    );
    dispatch({
      type: USER_ACTIONS.ADD_TO_WATCH_LATER,
      payload: response.data.watchlater,
    });
    toast.success("Added to watch later");
  } catch (err) {
    toast.error("Error in adding to watch later");
    console.error("add to watchlater", err);
  }
};

export {addToWatchLater};
