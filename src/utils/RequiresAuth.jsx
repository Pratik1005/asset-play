import {Navigate, useLocation} from "react-router-dom";
import {useAuth} from "../context";

const RequiresAuth = ({children}) => {
  const {auth} = useAuth();
  const location = useLocation();
  console.log(auth);
  return auth.token ? (
    children
  ) : (
    <Navigate to="/login" state={{from: location}} replace />
  );
};

export {RequiresAuth};
