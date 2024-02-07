import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRouter = ({children}) => {

  const {user} = useContext(AuthContext)
  const location = useLocation()

  if(user){
     return children;
  }

  return <Navigate state={location.pathname} to='/login' > </Navigate>
  
};

export default PrivateRouter;