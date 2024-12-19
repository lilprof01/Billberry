import React from "react";
import Button from "./button";
import bg from './assets/bg.jpg'

function Hero(){
  return (
    <div className="dark:bg-[url(./assets/bg.jpg)] bg-cover bg-center bg-fixed min-h-svh w-full dark:bg-[#212529] flex justify-center align-middle p-10 sm:py-20">
      <div className="w-full sm:max-w-lg flex flex-col justify-center align-middle gap-3 text-center text-white py-10">
        <h1 className="text-[black] dark:text-[#dee2e6] text-4xl sm:text-7xl font-black leading-tight">Designed for freelancers</h1>
        <h3 className="text-lg sm:text-3xl text-[black] dark:text-[#dee2e6] font-normal opacity-75">Get paid seamlessly for your hard/smart work</h3>
        <div className="w-fit m-auto flex justify-between align-middle gap-4">
          <button className="bg-[#052659] dark:bg-[#990f4b] hover:opacity-80 px-5 py-2 rounded-full text-[white]">Get paid</button>
          <button className="bg-[#052659] dark:bg-[#990f4b] hover:opacity-80 px-5 py-2 rounded-full text-[white]">Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;