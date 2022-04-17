import {v4 as uuid} from "uuid";

const userDataReducer = (state, action) => {
  switch (action.type) {
    case "CREATE_NEW_PLAYLIST_AND_ADD_VIDEO":
      return {
        ...state,
        playlist: [
          {
            id: uuid(),
            name: action.payload.playlistName,
            videos: [action.payload.videoData],
          },
          ...state.playlist,
        ],
      };
    case "REMOVE_VIDEO_FROM_PLAYLIST":
      return {
        ...state,
        playlist: state.playlist.map((item) =>
          item.name === action.payload.playlist
            ? {
                ...item,
                videos: item.videos.filter(
                  (video) => video._id !== action.payload.id
                ),
              }
            : item
        ),
      };
    case "ADD_VIDEO_TO_PLAYLIST":
      return {
        ...state,
        playlist: state.playlist.map((item) =>
          item.name === action.payload.playlist
            ? {...item, videos: [action.payload.videoData, ...item.videos]}
            : item
        ),
      };
    default:
      return {state};
  }
};

export {userDataReducer};
