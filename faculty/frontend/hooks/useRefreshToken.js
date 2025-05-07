import useAuth from './useAuth'
import axios from '../api/axios'

const REFRESH_URL = '/auth/refresh'

const useRefreshToken = () => {

    const { auth, setAuth } = useAuth();

    const refresh = async () => {
        console.log("REFRESHHH")
        try {
            const response = await axios.get(REFRESH_URL, {
                withCredentials: true
            })
            console.log(response)
            setAuth({
                ...auth,
                id: response.data.id,
                firstTime: response.data.firstTime,
                accessToken: response.data.accessToken
            })
            
            return response.data.accessToken;
        } catch (error) {
            console.log(error)
        }

    }

    return refresh
}

export default useRefreshToken