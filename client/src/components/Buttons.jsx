import React from "react";

function Buttons() {
  const btns = ["ADD", "DELETE ALL"];
  return (
    <div className="flex flex-row gap-5 px-5 py-2">
      {btns.map((name, key) => (
        <button
          key={key}
          className="text-black p-2 bg-white rounded-md hover:shadow hover:shadow-slate-50 hover:bg-gray-300 transition-all ease-in-out duration-200"
        >
          {name}
        </button>
      ))}
    </div>
  );
}

export default Buttons;
