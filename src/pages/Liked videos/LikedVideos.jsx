import {useState} from "react";
import {useUserData} from "../../context";
import {NavMenu, VideoCard} from "../../components";

const LikedVideos = () => {
  const {userDataState} = useUserData();
  return (
    <section className="app-ctn">
      <NavMenu />
      <div>
        <h2 className="text-center main-title">Your Liked Videos</h2>
        <div className="section-ctn">
          {userDataState.likedVideos.length === 0 && (
            <h3 className="text-center">You have no liked videos</h3>
          )}
          <div className="videos-ctn">
            {userDataState.likedVideos.map((item) => (
              <VideoCard cardData={item} key={item._id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export {LikedVideos};
