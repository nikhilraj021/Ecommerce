import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

const Navbar = () => {
  const navigate = useNavigate();
  const {userData, backendUrl, setIsLoggedin, setUserData} = useContext(AppContext)
  return (
    <nav className="flex justify-between items-center p-5 bg-gray-500 absolute top-0 w-full">
      <h1 className="text-2xl font-bold text-white">Ecommerce</h1>

      {userData ? (
        <div>
          {userData.name[0].toUpperCase()}
        </div>
      ) : (<button
        className="border px-2 py-1 rounded-md text-white"
        onClick={() => navigate("/login")}
      >
        Login
      </button>)}
      
    </nav>
  );
};

export default Navbar;
