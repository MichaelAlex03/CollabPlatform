import { useLocation, Outlet, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = () => {
    const { auth } = useAuth();
    const location = useLocation();
    console.log(location)

    return (
        auth?.aNum ? <Outlet /> : <Navigate to={'/login'} state={{ from: location }} replace />
    )
}

export default RequireAuth;