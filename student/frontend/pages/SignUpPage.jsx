import React from 'react';
import Footer from '../components/Footer';
import LogHeader from '../components/LoginHeader.jsx';

const SignUpPage = () => {
    return (
    <main class="font-fam text-gray-800 bg-white">
        <LogHeader />
        <div className="flex justify-center items-center h-screen bg-zinc-100">
          <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
            <h2 className="text-2xl text-center font-semibold mb-6">Sign Up</h2>
            <form>
                <div className="mb-4">
                    <label className="block text-gray-700">Name</label>
                    <input type="name" className="w-full p-2 border border-gray-300 rounded mt-1" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Department</label>
                    <input type="department" className="w-full p-2 border border-gray-300 rounded mt-1" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">ID Number</label>
                    <input type="anum" className="w-full p-2 border border-gray-300 rounded mt-1" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Texas State Email</label>
                    <input type="email" className="w-full p-2 border border-gray-300 rounded mt-1" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Password</label>
                    <input type="password" className="w-full p-2 border border-gray-300 rounded mt-1" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Confirm Password</label>
                    <input type="password" className="w-full p-2 border border-gray-300 rounded mt-1" />
                </div>
                <button type="submit" className="w-full bg-[#501214] hover:bg-[#7d1c1f] text-white p-2 rounded">Sign Up</button>
            </form>
          </div>
        </div>
        <Footer />
    </main>
    );
}

export default SignUpPage;