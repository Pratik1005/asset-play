import {createContext, useContext, useReducer} from "react";
import {userDataReducer} from "../reducer";

const UserDataContext = createContext(null);

const initialState = {
  playlist: [],
  isSaveToPlaylistClicked: false,
};

const UserDataProvider = ({children}) => {
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
