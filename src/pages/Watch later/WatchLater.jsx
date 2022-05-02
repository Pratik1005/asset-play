import {NavMenu, VideoCard, MobileHeader} from "../../components";
import {useUserData} from "../../context";

const WatchLater = () => {
  const {userDataState} = useUserData();
  return (
    <section className="app-ctn">
      <MobileHeader />
      <NavMenu />
      <div>
        <h2 className="text-center main-title">Watch Later</h2>
        <div className="section-ctn">
          {userDataState.watchLater.length === 0 && (
            <h3 className="text-center">You have no watch later videos</h3>
          )}
          <div className="videos-ctn">
            {userDataState.watchLater.map((item) => (
              <VideoCard cardData={item} key={item._id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export {WatchLater};
