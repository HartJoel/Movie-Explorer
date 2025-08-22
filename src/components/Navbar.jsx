import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="p-3.5 flex justify-between items-center bg-gray-100">
      <h1 className="text-4xl">MOVIES</h1>
      <div className="flex gap-5">
        <button
          onClick={() => navigate("/")}
          className={`border w-[100px] h-[40px] rounded-2xl  ${
            location.pathname === "/"
              ? "bg-black text-white"
              : "bg-white text-black"
          }`}
        >
          Home
        </button>

        <button
          onClick={() => navigate("/favourite")}
          className={`border w-[100px] h-[40px] rounded-2xl active:bg-black ${
            location.pathname === "/favourite"
              ? "bg-black text-white"
              : "bg-white text-black"
          }`}
        >
          Favorite
        </button>
      </div>
    </div>
  );
};

export default Navbar;
