import axios from "axios";
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

export {addToHistory};
