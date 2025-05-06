import React from 'react'
import useAuth from '../../../student/frontend/hooks/useAuth'
import axios from '../api/axios'

const REFRESH_URL = '/auth/refresh'

const useRefreshToken = () => {

    const { auth, setAuth } = useAuth()

    const refresh = () => {
        const response = axios.get(REFRESH_URL)
        setAuth({
            ...auth,
            id: response.data.id,
            username: response.data.username,
            accessToken: response.data.accessToken
        })

        return response.data.accessToken
    }

    return refresh
}

export default useRefreshToken