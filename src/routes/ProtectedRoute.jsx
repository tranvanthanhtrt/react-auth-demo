import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../provider/authProvider"

export const ProtectedRoute = () => {
  const {token} = useAuth();

  return !token ? <Navigate to="/login"/> : <Outlet/>
}