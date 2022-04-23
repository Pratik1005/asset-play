const isVideoInPlaylist = (playlist, title, videoId) => {
  return playlist
    .filter((item) => item.title === title)[0]
    .videos.some((item) => item._id === videoId);
};

export {isVideoInPlaylist};
