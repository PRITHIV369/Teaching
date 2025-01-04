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
    <div className="relative w-full h-screen flex justify-center items-center overflow-hidden">
      <div className="w-20 h-20 border-4 border-t-4 border-yellow-700 border-solid rounded-full animate-spin border-t-transparent transform-origin-center"></div>
    </div>
  );
};

export default Loading;
