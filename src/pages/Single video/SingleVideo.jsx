import "./SingleVideo.css";
import axios from "axios";
import {useState, useEffect} from "react";
import {useParams, useNavigate} from "react-router-dom";
import {useAuth, useUserData} from "../../context";
import {isVideoPresent} from "../../utils";
import {likeService, watchLaterService} from "../../services";
import {NavMenu, PlaylistModal, MobileHeader} from "../../components";

const SingleVideo = () => {
  const [singleVideo, setSingleVideo] = useState({});
  const [isPlaylistActive, setIsPlaylistActive] = useState(false);
  const {auth} = useAuth();
  const {userDataState, userDataDispatch} = useUserData();
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`/api/video/${params.videoId}`);
        setSingleVideo(response.data.video);
      } catch (err) {
        console.error("single video", err);
      }
    })();
  }, [params.videoId]);

  const handleLikeVideo = () => {
    likeService(
      auth,
      userDataState.likedVideos,
      singleVideo,
      userDataDispatch,
      navigate
    );
  };

  const handlePlaylist = () => {
    setIsPlaylistActive((prev) => !prev);
  };

  const handleWatchLater = () => {
    watchLaterService(
      auth,
      userDataState.watchLater,
      singleVideo,
      userDataDispatch,
      navigate
    );
  };
  return (
    <section className="app-ctn">
      <MobileHeader />
      <NavMenu />
      <div className="single-video-ctn pd-lg">
        <iframe
          width="100%"
          height="80%"
          src={`https://www.youtube.com/embed/${params.videoId}?autoplay=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className="cta-icons">
          <div className="icon-text" onClick={handleLikeVideo}>
            <span
              className={`material-icons${
                isVideoPresent(userDataState.likedVideos, singleVideo._id)
                  ? ""
                  : "-outlined"
              }`}
            >
              thumb_up
            </span>{" "}
            LIKE
          </div>
          <div className="icon-text" onClick={handlePlaylist}>
            <span className="material-icons">playlist_add</span> SAVE
          </div>
          <div className="icon-text" onClick={handleWatchLater}>
            <span
              className={`material-icons${
                isVideoPresent(userDataState.watchLater, singleVideo._id)
                  ? ""
                  : "-outlined"
              }`}
            >
              watch_later
            </span>{" "}
            WATCH LATER
          </div>
        </div>
        <h3 className="pd-bottom-md">{singleVideo.title}</h3>
        <div className="views-date-info fw-bold pd-bottom-md">
          <span>{singleVideo.views} views</span>
          <span>•</span>
          <span>{singleVideo.date}</span>
        </div>
        <p>{singleVideo.description}</p>
        {isPlaylistActive && (
          <PlaylistModal
            setIsSaveToPlaylistActive={setIsPlaylistActive}
            videoData={singleVideo}
          />
        )}
      </div>
    </section>
  );
};

export {SingleVideo};
