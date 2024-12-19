import React from "react";
import web3 from './assets/web3.jpg'
import cashout from './assets/cashout.jpg'
import reminder from './assets/reminder.jpg'
import clients from './assets/clients.jpg'

function Features(){
  return(
    <div>
      <div className="dark:bg-[#2b3035] sm:flex justify-between align-middle sm:gap-16 p-10">
        <div className="appear-left text-center mb-8 max-w-lg">
          <h1 className="text-2xl sm:text-3xl text-[black] dark:text-[#dee2e6] font-semibold">Set Reminders</h1>
          <p className="text-xl font-light sm:text-lg text-[black] dark:text-[#dee2e6] sm:font-normal">Sending payment reminders to clients to ensure healthy cash flow in your business. Automating this process allows you to save time and alleviate the stress of following up on overdue invoices.</p>
          <div className="sm:max-w-full h-72 mt-4 flex justify-center align-middle m-auto">
            <img className="rounded-md dark:opacity-70 max-h-full max-w-full" src={reminder} />
          </div>
        </div>

        <div className="appear-right text-center max-w-lg">
          <h1 className="text-2xl sm:text-3xl text-[black] dark:text-[#dee2e6] font-semibold">Manage Clients</h1>
          <p className="text-xl font-light sm:text-lg text-[black] dark:text-[#dee2e6] sm:font-normal">Maintaining organization by consolidating invoices, payments, and client information in one location. This enhances efficiency and accuracy in managing financial records. By having everything centralized.</p>
          <div className="w-fit sm:max-w-full h-72 mt-4 flex justify-center align-middle m-auto">
            <img className="rounded-md dark:opacity-70 max-h-full" src={clients} />
          </div>
        </div>
      </div>

      <div className="dark:bg-[#2b3035] sm:flex justify-between align-middle sm:gap-16 p-10">
        <div className="appear-left text-center mb-8 max-w-lg">
          <h1 className="text-2xl sm:text-3xl text-[black] dark:text-[#dee2e6] font-semibold">Easy Cashout</h1>
          <p className="text-xl font-light sm:text-lg text-[black] dark:text-[#dee2e6] sm:font-normal">Get paid with well-known payment platforms (such as PayPal, Stripe, Square, and PayStack)</p>
          <div className="w-fit sm:max-w-full h-72 mt-4 flex justify-center align-middle m-auto">
            <img className="rounded-md dark:opacity-70 max-h-full" src={cashout} />
          </div>
        </div>

        <div className="appear-right text-center max-w-lg">
          <h1 className="text-2xl sm:text-3xl text-[black] dark:text-[#dee2e6] font-semibold">Web3 Payment</h1>
          <p className="text-xl font-light sm:text-lg text-[black] dark:text-[#dee2e6] sm:font-normal">Integrating cryptocurrencies for enhanced payment security through Web3.</p>
          <div className="w-fit sm:max-w-full h-72 mt-4 flex justify-center align-middle m-auto">
            <img className="rounded-md dark:opacity-70 max-h-full" src={web3}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;