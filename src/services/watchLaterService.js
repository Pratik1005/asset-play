import {isVideoPresent, removeFromWatchLater, addToWatchLater} from "../utils";

const watchLaterService = (
  auth,
  watchLaterVideos,
  video,
  userDataDispatch,
  navigate
) => {
  if (auth.isLoggedIn) {
    isVideoPresent(watchLaterVideos, video._id)
      ? removeFromWatchLater(video._id, auth.token, userDataDispatch)
      : addToWatchLater(video, auth.token, userDataDispatch);
  } else {
    navigate("/login");
  }
};

export {watchLaterService};
