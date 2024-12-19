import React from 'react';

function Footer(){
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="footer text-[black] dark:text-[white] bg-slate-600 dark:bg-[#212529] flex flex-col text-center sm:flex sm:flex-row sm:text-left gap-10 sm:gap-14 justify-between align-middle p-10 sm:p-20">
      <div>&copy; {year}</div>

      <div>
        <h1 className="text-base sm:text-xl font-semibold">About</h1>
        <ul>
          <li><a href="#" className='hover:text-[#dee2e6] text-sm sm:text-base font-normal opacity-70'>Team</a></li>
          <li><a href="#" className='hover:text-[#dee2e6] text-sm sm:text-base font-normal opacity-70'>Locations</a></li>
          <li><a href="#" className='hover:text-[#dee2e6] text-sm sm:text-base font-normal opacity-70'>Privacy policy</a></li>
          <li><a href='#' className='hover:text-[#dee2e6] text-sm sm:text-base font-normal opacity-70'>Terms and conditions</a></li>
        </ul>
      </div>

      <div className='hidden sm:block'>
        <h1 className="text-base sm:text-xl font-semibold">About</h1>
        <ul>
          <li><a href="#" className='hover:text-[#dee2e6] text-sm sm:text-base font-normal opacity-70'>Team</a></li>
          <li><a href="#" className='hover:text-[#dee2e6] text-sm sm:text-base font-normal opacity-70'>Location</a></li>
          <li><a href="#" className='hover:text-[#dee2e6] text-sm sm:text-base font-normal opacity-70'>Privacy</a></li>
          <li><a href='#' className='hover:text-[#dee2e6] text-sm sm:text-base font-normal opacity-70'>Terms</a></li>
        </ul>
      </div>

      <div>
        <h1 className="text-base sm:text-xl font-semibold">Socials</h1>
        <ul>
          <li><a href="#" className='hover:text-[#dee2e6] text-sm sm:text-base font-normal opacity-70'>LinkedIn</a></li>
          <li><a href="#" className='hover:text-[#dee2e6] text-sm sm:text-base font-normal opacity-70'>Instagram</a></li>
          <li><a href="#" className='hover:text-[#dee2e6] text-sm sm:text-base font-normal opacity-70'>Github</a></li>
          <li><a href='#' className='hover:text-[#dee2e6] text-sm sm:text-base font-normal opacity-70'>X</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer;