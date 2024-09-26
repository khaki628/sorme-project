import React from "react";
import Header from "./components/header";

const NotFound = () => {
  return (
    <main>
      <Header />
      <div className="w-full h-screen flex flex-col items-center bg-[url('/img/404bg.png')] bg-cover">
        <p className=" h-[250px] text-white text-[226px] font-semibold">404</p>
        <p className="text-white text-[90px] font-semibold">page not found</p>
        <div className="w-[687px] h-[115px] flex flex-row justify-around items-center rounded-[40px] bg-white">
          <button className="w-[20%] h-full ml-10 ">
            <img src="/svg/404search-icon.svg" alt="search-icon" />
          </button>
          <input
            placeholder="Product search and..."
            className="w-[70%] h-full text-[32px] rounded-r-[40px] placeholder:text-black focus:outline-none "
            type="text"
          />
        </div>
      </div>
    </main>
  );
};

export default NotFound;
