const userDataReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_PLAYLIST":
      return {
        ...state,
        playlist: [
          {
            name: action.payload.playlistName,
            videos: [action.payload.videoData],
          },
          ...state.playlist,
        ],
      };
    default:
      return {state};
  }
};

export {userDataReducer};
