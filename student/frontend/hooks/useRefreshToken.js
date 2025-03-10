import axios from '../api/axios';
import useAuth from './useAuth';

const REFRESH_URL = '/auth/refresh'

const useRefreshToken = () => {

    const { setAuth } = useAuth();

    const refresh = async () => {
        try {
            const response = await axios.get(REFRESH_URL, {
                withCredentials: true
            });
            setAuth(prevAuth => ({
                ...prevAuth,
                aNum: response.data.aNum,
                firstTime: response.data.firstTime,
                accessToken: response.data.accessToken,
            }));
        } catch (error) {
            console.log(error)
        }

        return response.data.accessToken;
    }

    return refresh;

}

export default useRefreshToken