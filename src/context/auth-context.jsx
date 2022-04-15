import {createContext, useContext, useEffect, useState} from "react";

const AuthContext = createContext({isLoggedIn: false});

const AuthProvider = ({children}) => {
  const [auth, setAuth] = useState({});

  useEffect(() => {
    (async () => {
      const token = localStorage.getItem("token");
      token
        ? setAuth({token: token, isLoggenIn: true})
        : setAuth({token: "", isLoggedIn: false});
    })();
  });
  return (
    <AuthContext.Provider value={{auth, setAuth}}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export {AuthProvider, useAuth};
