import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Loading = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 4000);
    return () => clearTimeout(timer); 
  }, [navigate]);

  return (
    <div className="relative bg-gradient-to-br from-orange-100 via-yellow-50 to-orange-200 w-full h-screen flex justify-center items-center overflow-hidden">
      <div className="absolute top-[-50px] left-[-50px] w-[250px] h-[250px] bg-orange-300 rounded-full mix-blend-multiply opacity-30 animate-orb"></div>
      <div className="absolute bottom-[-60px] right-[-60px] w-[300px] h-[300px] bg-yellow-400 rounded-full mix-blend-multiply opacity-30 animate-orb animation-delay-2000"></div>
      <div className="absolute top-10 right-20 w-[200px] h-[200px] bg-orange-500 rounded-full mix-blend-multiply opacity-20 animate-orb animation-delay-4000"></div>
      <div className="w-20 h-20 border-4 border-t-4 border-orange-600 border-solid rounded-full animate-spin border-t-transparent"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-orange-200 opacity-20 blur-3xl z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-yellow-300 opacity-20 blur-3xl z-10"></div>
    </div>
  );
};

export default Loading;
