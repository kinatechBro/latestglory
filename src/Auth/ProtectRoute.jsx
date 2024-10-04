import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/UserProviderContext";

const ProtectRoute = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/auth" />;
  }

  return <Outlet key="create" />;
};

export default ProtectRoute;
