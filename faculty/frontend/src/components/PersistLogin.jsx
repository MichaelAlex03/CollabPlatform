import React, { useEffect, useState } from 'react'
import useAuth from '../../hooks/useAuth'
import useRefreshToken from '../../hooks/useRefreshToken'
import { Outlet } from 'react-router-dom';

const PersistLogin = () => {
    const { auth, persist } = useAuth();
    const refresh = useRefreshToken();

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const verifyRefreshToken = async () => {
            try {
                console.log("hello")
                await refresh();
            } catch (error) {
                console.log(error)
            } finally {
                setIsLoading(false)
            }

        }
        !auth?.accessToken && persist ? verifyRefreshToken() : setIsLoading(false);
    }, [])

    console.log(persist)
    console.log("AUth", auth)


    return (
        <>
            {!persist
                ? <Outlet />
                : isLoading
                    ? <p>....Loading</p>
                    : <Outlet />
            }
        </>
    )
}

export default PersistLogin