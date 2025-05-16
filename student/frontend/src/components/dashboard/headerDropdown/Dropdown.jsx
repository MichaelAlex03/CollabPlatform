import React from 'react'
import axios from '../../../../api/axios';
import useAuth from '../../../../hooks/useAuth';

const LOGOUT_URL = '/auth/logout'

const Dropdown = () => {

    const { setAuth } = useAuth();

    const handleLogout = async () => {
        try {
            setAuth({});
            await axios.get(LOGOUT_URL, {
                withCredentials: true,
            });
            navigate("/login", { replace: true });
        } catch (err) {
            setErrMsg("Error logging out");
            console.log(err);
        }
    };

    return (
        <div
            className='border border-[#501214] rounded-xl flex flex-col w-full
            items-center justify-center z-10 bg-white '>
            <ul className='flex flex-col w-full'>
                <li
                    className='hover:bg-[#501214] text-black hover:text-white p-3 rounded-tl-xl rounded-tr-xl hover:cursor-pointer'
                    onClick={handleLogout}
                >
                    Logout
                </li>
                <li className='hover:bg-[#501214] text-black hover:text-white p-3 hover:cursor-pointer'>Profile</li>
                <li className='hover:bg-[#501214] text-black hover:text-white p-3 rounded-bl-xl rounded-br-xl hover:cursor-pointer'>Skills</li>
            </ul>
        </div>
    )
}

export default Dropdown