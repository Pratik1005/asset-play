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
          item.title === action.payload.title ? action.payload : item
        ),
      };
    case USER_ACTIONS.ADD_TO_LIKED_VIDEOS:
      return {...state, likedVideos: [...action.payload]};
    default:
      return {state};
  }
};

export {userDataReducer};
