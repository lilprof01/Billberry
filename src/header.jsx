import React, { useState } from "react";
import Button from "./button";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <div className="header sticky top-0 z-50 bg-slate-600 dark:bg-[#212529] flex justify-between align-middle px-4 py-5 shadow-lg shadow-black">
      <h2 className="text-md sm:text-2xl font-black dark:text-[white]">BILLBERRY</h2>
      <div className="flex justify-between align-middle gap-4">
        <Button text="Login" />
        <Button text="Sign up" />
      </div>
      <div onClick={toggleMenu} id="toggle" className="sm:hidden dark:text-[white] h-8 w-8 border-solid border-black dark:border-blue-50 border rounded flex justify-center align-middle text-center text-lg cursor-pointer">&#9776;</div>

      {isOpen && (
        <div className='mobile-nav h-screen w-screen absolute top-[72px] right-0 bg-slate-600 dark:bg-[#212529] dark:text-[white] flex flex-col justify-start gap-4 p-5 sm:hidden'>
          <a href="#">Login</a>
          <a href="#">Sign Up</a>
        </div>
      )}
    </div>
  );
}

export default Header;