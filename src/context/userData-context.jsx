import {createContext, useContext, useReducer, useEffect} from "react";
import axios from "axios";
import {userDataReducer} from "../reducer";

const UserDataContext = createContext(null);

const initialState = {
  playlist: [],
};

const UserDataProvider = ({children}) => {
  useEffect(() => {
    (async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get("api/user/playlists", {
          headers: {authorization: token},
        });
        console.log("data-context", response.data.playlists);
        userDataDispatch({
          type: "INITIAL_PLAYLIST",
          payload: response.data.playlists,
        });
      } catch (err) {
        console.error("get playlist", err);
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
