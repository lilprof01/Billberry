import React from "react";

function Button(props){
  return(
    <button className="hidden sm:block bg-[#052659] dark:bg-[#990f4b] hover:opacity-80 px-5 py-2 rounded-full text-[white]">{props.text}</button>
  )
}

export default Button;