import React from 'react'
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
    const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center h-screen bg-[#00796B]">
        <button 
            onClick={() => navigate("/dashboard")} 
            className="text-3xl font-bold text-white px-8 py-3 rounded-md bg-teal-800 hover:bg-teal-600 transition-colors duration-300">
            Login
        </button>
    </div>
  )
}

export default Welcome;
