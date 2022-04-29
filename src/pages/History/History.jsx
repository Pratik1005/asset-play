import {useUserData} from "../../context";
import {NavMenu, VideoCard} from "../../components";

const History = () => {
  const {userDataState, userDataDispatch} = useUserData();
  return (
    <section className="app-ctn">
      <NavMenu />
      <div>
        <h2 className="text-center main-title">History</h2>
        <div className="section-ctn">
          {userDataState.history.length === 0 && (
            <h3 className="text-center">Your history is empty!</h3>
          )}
          <div className="videos-ctn">
            {userDataState.history.map((item) => (
              <VideoCard cardData={item} key={item._id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export {History};
