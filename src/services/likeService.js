import {
  isVideoPresent,
  removeFromLikedVideos,
  addToLikedVideos,
} from "../utils";

const likeService = (auth, likedVideos, video, userDataDispatch, navigate) => {
  if (auth.isLoggedIn) {
    isVideoPresent(likedVideos, video._id)
      ? removeFromLikedVideos(video._id, auth.token, userDataDispatch)
      : addToLikedVideos(video, auth.token, userDataDispatch);
  } else {
    navigate("/login");
  }
};

export {likeService};
