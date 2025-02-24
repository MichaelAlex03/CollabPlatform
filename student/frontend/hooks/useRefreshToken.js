import axios from '../api/axios';
import useAuth from './useAuth';

const REFRESH_URL = '/auth/refresh'

const useRefreshToken = () => {
  
    const { setAuth } = useAuth();

    const refresh = async () => {
        const response = await axios.get(REFRESH_URL)
        setAuth({
            ...prevAuth,
            refreshToken: response.data.accessToken,
            username: response.data.username
        })

        return response.data.accessToken;
    }

    return refresh;

}

export default useRefreshToken