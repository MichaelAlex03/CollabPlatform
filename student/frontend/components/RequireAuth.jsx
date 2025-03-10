import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = () => {
    const { auth } = useAuth();
    console.log("Hereee")
    return (
        auth?.aNum ? <Outlet /> : <Navigate to={'/login'} />
    )
}

export default RequireAuth;