import React from "react";

function Task({ name }) {
  return (
    <div className="bg-white border border-black rounded-md shadow-md shadow-slate-400 flex flex-row justify-between md:text-base text-xs md:pl-10 pl-5">
      <div className="w-[60%] py-1">
        <p className="">{name}</p>
      </div>
      <div className="flex flex-row w-[50%] md:max-w-[110px] max-w-[90px] items-center">
        <div className="max-w-[55px] h-full">
          <button className="hover:bg-slate-200 py-1 px-[10px]">Edit</button>
        </div>
        <div className="max-w-[55px] h-full">
          <button className="hover:bg-slate-200 py-1 px-[10px]">Done</button>
        </div>
      </div>
    </div>
  );
}

export default Task;
