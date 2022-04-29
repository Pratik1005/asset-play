import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useAuth, useUserData} from "../context";
import {reduceTitleLength, convertViews, isVideoPresent} from "../utils/";
import {addToHistory} from "../services";
import {VideoOption, PlaylistModal} from "../components";

const VideoCard = ({cardData}) => {
  const {thumbnail, profile, title, creator, views, date, length} = cardData;
  const [isOptionActive, setIsOptionActive] = useState(false);
  const [isSaveToPlaylistActive, setIsSaveToPlaylistActive] = useState(false);
  const {auth} = useAuth();
  const {userDataState, userDataDispatch} = useUserData();
  const navigate = useNavigate();

  const handleVideoClick = () => {
    if (auth.token && !isVideoPresent(userDataState.history, cardData._id)) {
      addToHistory(cardData, auth.token, userDataDispatch);
    }
    navigate(`/singlevideo/${cardData._id}`);
  };
  return (
    <div className="video cursor-pointer">
      <div className="video-thumbnail" onClick={handleVideoClick}>
        <img src={thumbnail} alt="{title}" className="img-responsive" />
        <span className="time-overlay fw-bold">{length}</span>
      </div>
      <div className="video-info">
        <img src={profile} alt="{creator}" className="br-full" />
        <div className="meta-data">
          <h5
            className="fw-bold pd-bottom-sm video-title"
            onClick={handleVideoClick}
          >
            {reduceTitleLength(title)}
          </h5>
          <p className="pd-bottom-sm creator">{creator}</p>
          <div className="views-date-info">
            <span>{convertViews(views)}</span>
            <span>•</span>
            <span>{date}</span>
          </div>
        </div>
        <div className="video-option">
          <span
            className="material-icons"
            onClick={() => setIsOptionActive((prev) => !prev)}
          >
            more_vert
          </span>
          {isOptionActive && (
            <VideoOption
              setIsOptionActive={setIsOptionActive}
              setIsSaveToPlaylistActive={setIsSaveToPlaylistActive}
              video={cardData}
            />
          )}
        </div>
      </div>
      {isSaveToPlaylistActive && (
        <PlaylistModal
          setIsSaveToPlaylistActive={setIsSaveToPlaylistActive}
          videoData={cardData}
        />
      )}
    </div>
  );
};

export {VideoCard};
