import {createContext, useContext, useReducer, useEffect} from "react";
import axios from "axios";
import {userDataReducer, USER_ACTIONS} from "../reducer";

const UserDataContext = createContext(null);

const initialState = {
  playlist: [],
  likedVideos: [],
  watchLater: [],
  history: [],
};

const token = localStorage.getItem("token");

const UserDataProvider = ({children}) => {
  token &&
    useEffect(() => {
      (async () => {
        const token = localStorage.getItem("token");
        try {
          const response = await axios.get("/api/user/playlists", {
            headers: {authorization: token},
          });
          userDataDispatch({
            type: USER_ACTIONS.INITIAL_PLAYLIST,
            payload: response.data.playlists,
          });
        } catch (err) {
          console.error("get playlist", err);
        }
      })();

      (async () => {
        try {
          const response = await axios.get("/api/user/likes", {
            headers: {authorization: token},
          });
          userDataDispatch({
            type: USER_ACTIONS.LIKED_VIDEOS_ACTIONS,
            payload: response.data.likes,
          });
        } catch (err) {
          console.error("get likes", err);
        }
      })();

      (async () => {
        try {
          const response = await axios.get("/api/user/watchlater", {
            headers: {authorization: token},
          });
          userDataDispatch({
            type: USER_ACTIONS.WATCH_LATER_ACTIONS,
            payload: response.data.watchlater,
          });
        } catch (err) {
          console.error("get watchlater", err);
        }
      })();

      (async () => {
        try {
          const response = await axios.get("/api/user/history", {
            headers: {authorization: token},
          });
          userDataDispatch({
            type: USER_ACTIONS.HISTORY_ACTIONS,
            payload: response.data.history,
          });
        } catch (err) {
          console.error("get history", err);
        }
      })();
    }, []);

  const [userDataState, userDataDispatch] = useReducer(
    userDataReducer,
    initialState
  );
  return (
    <UserDataContext.Provider value={{userDataState, userDataDispatch}}>
      {children}
    </UserDataContext.Provider>
  );
};

const useUserData = () => useContext(UserDataContext);

export {UserDataProvider, useUserData};
