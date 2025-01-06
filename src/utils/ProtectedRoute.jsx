import { Outlet,Navigate } from "react-router-dom"
import { getLocalItem, getTokenExpiry } from "./helperFunctions";

const ProtectedRoute = () => {
  const token = getLocalItem('token');
  const tokenExpired = getTokenExpiry(0);
  return !tokenExpired && token ? <Outlet/> : <Navigate to="/login"/>; 
}

export default ProtectedRoute