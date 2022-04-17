const userDataReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_PLAYLIST_MODAL":
      return {
        ...state,
        isSaveToPlaylistClicked: !state.isSaveToPlaylistClicked,
      };
    default:
      return {state};
  }
};

export {userDataReducer};
