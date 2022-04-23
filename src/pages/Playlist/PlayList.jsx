import "./PlayList.css";
import {useEffect, useState} from "react";
import axios from "axios";
import {useUserData, useAuth} from "../../context";
import {NavMenu, VideoCard, Loader} from "../../components";

const PlayList = () => {
  const {userDataState} = useUserData();
  const {auth} = useAuth();
  const [loader, setLoader] = useState(false);
  // const [playlist, setPlaylist] = useState([]);
  const {playlist} = userDataState;
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const response = await axios.get("/api/user/playlists", {
  //         headers: {authorization: auth.token},
  //       });
  //       console.log(response);
  //       setLoader(false);
  //       setPlaylist(response.data.playlists);
  //     } catch (err) {
  //       setLoader(false);
  //       console.error("Playlist", err);
  //     }
  //   })();
  // }, []);
  return (
    <section className="app-ctn">
      <NavMenu />
      <div>
        <h2 className="text-center main-title">Your Playlist</h2>
        <div className="playlist-ctn">
          {loader && <Loader />}
          {playlist.length === 0 && !loader && (
            <h3 className="text-center">You have no playlist</h3>
          )}
          {playlist.map((item) => (
            <div className="pd-bottom-lg" key={item._id}>
              <h3 className="playlist-title pd-bottom-lg">{item.title}</h3>
              <div className="videos-ctn">
                {item.videos.map((video) => (
                  <VideoCard cardData={video} key={video.id} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export {PlayList};
