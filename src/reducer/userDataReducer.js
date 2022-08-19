import {USER_ACTIONS} from "./constant";

const userDataReducer = (state, action) => {
  switch (action.type) {
    case USER_ACTIONS.INITIAL_PLAYLIST:
    case USER_ACTIONS.ADD_NEW_PLAYLIST:
    case USER_ACTIONS.DELETE_PLAYLIST:
      return {...state, playlist: [...action.payload]};
    case USER_ACTIONS.ADD_VIDEO_TO_PLAYLIST:
    case USER_ACTIONS.REMOVE_VIDEO_FROM_PLAYLIST:
      return {
        ...state,
        playlist: state.playlist.map((item) =>
          item._id === action.payload._id ? action.payload : item
        ),
      };
    case USER_ACTIONS.LIKED_VIDEOS_ACTIONS:
      return {...state, likedVideos: [...action.payload]};
    case USER_ACTIONS.WATCH_LATER_ACTIONS:
      return {...state, watchLater: [...action.payload]};
    case USER_ACTIONS.HISTORY_ACTIONS:
      return {...state, history: [...action.payload]};
    default:
      return {state};
  }
};

export {userDataReducer};
