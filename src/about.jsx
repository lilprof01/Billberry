import React from "react";

function About(){
  return(
    <div className="dark:bg-[#212529] py-20 px-10 flex justify-center align-middle">
      <div className="appear w-full sm:max-w-xl flex flex-col justify-center align-middle gap-3 text-center text-white py-10">
        <h1 className="text-3xl sm:text-5xl text-[black] dark:text-[#dee2e6] font-bold">About Billberry</h1>
        <p className="text-lg sm:text-xl text-[black] dark:text-[#dee2e6] font-light opacity-75 sm:leading-relaxed">BillBerry, a payment processing SaaS platform that helps YOU (freelancers) and small businesses get paid effortlessly. We do this by providing a simple and intuitive platform for creating professional-looking invoices, tracking payments, and managing clients. <a href="#" className="underline">Signup</a> now and get started!</p>
        <div className="w-fit m-auto flex justify-between align-middle gap-4">
          <button className="bg-[#052659] dark:bg-[#990f4b] hover:opacity-80 px-5 py-2 rounded-full text-[white]">Login</button>
          <button className="bg-[#052659] dark:bg-[#990f4b] hover:opacity-80 px-5 py-2 rounded-full text-[white]">Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default About;