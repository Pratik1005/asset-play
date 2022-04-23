import {v4 as uuid} from "uuid";

const userDataReducer = (state, action) => {
  switch (action.type) {
    case "INITIAL_PLAYLIST":
      return {...state, playlist: [...action.payload]};
    case "ADD_NEW_PLAYLIST":
      return {...state, playlist: [...action.payload]};
    case "ADD_VIDEO_TO_PLAYLIST":
      return {
        ...state,
        playlist: state.playlist.map((item) =>
          item.title === action.payload.title ? action.payload : item
        ),
      };
    case "REMOVE_VIDEO_FROM_PLAYLIST":
      return {
        ...state,
        playlist: state.playlist.map((item) =>
          item.title === action.payload.title ? action.payload : item
        ),
      };
  }
};

export {userDataReducer};
