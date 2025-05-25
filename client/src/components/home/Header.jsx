import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const Header = () => {
    const {userData} = useContext(AppContext)
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-2xl font-bold">Welcome To Ecommerce</h1>
        <h1 className="text-2xl font-bold text-blue-800">Hey {userData? userData.name : "Developer"}!!!</h1>
        <p className="text-gray-500">Welcome to your E-commerce website</p>
        <p className="text-gray-500">Lets start with a quick product tour and we will build </p>

        <div>
          <button className="bg-gray-800 text-white p-2 rounded-md">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
