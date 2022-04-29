import {useAuth, useUserData} from "../../context";
import {clearAllHistory} from "../../services";
import {NavMenu, VideoCard} from "../../components";

const History = () => {
  const {userDataState, userDataDispatch} = useUserData();
  const {auth} = useAuth();

  const handleClearHistory = () => {
    clearAllHistory(auth.token, userDataDispatch);
  };
  return (
    <section className="app-ctn">
      <NavMenu />
      <div>
        <h2 className="text-center main-title">History</h2>
        {userDataState.history.length > 0 && (
          <div
            className="clear-history cursor-pointer fw-bold"
            onClick={handleClearHistory}
          >
            <span className="material-icons">delete</span> Clear all watch
            history
          </div>
        )}
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
