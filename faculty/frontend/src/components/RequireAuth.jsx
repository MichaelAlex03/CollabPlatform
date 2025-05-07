import React from 'react'
import useAuth from '../../hooks/useAuth'
import { Outlet, Navigate } from 'react-router-dom'

const RequireAuth = () => {

    const { auth } = useAuth();

    return (
        auth?.id ? <Outlet /> : <Navigate to={'/login'} />
    )
}

export default RequireAuth