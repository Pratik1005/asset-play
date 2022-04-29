import axios from "axios";
import {toast} from "react-toastify";
import {USER_ACTIONS} from "../reducer";

const addToHistory = async (video, token, userDataDispatch) => {
  try {
    const response = await axios.post(
      "/api/user/history",
      {video},
      {
        headers: {authorization: token},
      }
    );
    userDataDispatch({
      type: USER_ACTIONS.ADD_TO_HISTORY,
      payload: response.data.history,
    });
  } catch (err) {
    console.error("add to history", err);
  }
};

const removeFromHistory = async (videoId, token, userDataDispatch) => {
  try {
    const response = await axios.delete(`/api/user/history/${videoId}`, {
      headers: {authorization: token},
    });
    userDataDispatch({
      type: USER_ACTIONS.HISTORY_ACTIONS,
      payload: response.data.history,
    });
    toast.success("Removed video from history");
  } catch (err) {
    toast.error("Error in removing video");
    console.error("remove from history", err);
  }
};

const clearAllHistory = async (token, userDataDispatch) => {
  try {
    const response = await axios.delete("/api/user/history/all", {
      headers: {authorization: token},
    });
    userDataDispatch({
      type: USER_ACTIONS.HISTORY_ACTIONS,
      payload: response.data.history,
    });
    toast.success("Removed all videos");
  } catch (err) {
    toast.error("Error in clearing history");
    console.error("clear all history", err);
  }
};

export {addToHistory, removeFromHistory, clearAllHistory};
