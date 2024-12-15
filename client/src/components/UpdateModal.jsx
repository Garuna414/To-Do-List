import React, { useState, useContext } from "react";
import { TasksContext } from "../hooks/TaskContext";

function UpdateModal() {
  const { visible, toggle, updateTask, modalData, setModalData } =
    useContext(TasksContext);

  const [data, setData] = useState("");

  const handleEdit = () => {
    if (data.length !== 0) {
      updateTask(modalData.id, data);
      toggle();
      setData("");
      setModalData([{}]);
    }
  };

  const toggleModal = () => {
    toggle();
    setModalData([{}]);
  };

  return (
    <div
      className={`absolute top-0 left-0 w-full h-full ${
        visible ? "flex flex-col items-center justify-center" : "hidden"
      }`}
    >
      <div
        className="absolute top-0 right-0 h-[100vh] w-[100vw] z-10 bg-black opacity-30"
        onClick={() => toggle()}
      ></div>
      <div className="bg-cyan-300 max-h-[300px] max-w-[300px] h-[40vh] w-[75vw] rounded-md z-20 p-5 flex flex-col gap-7">
        <div className="w-full">
          <p>Old Task</p>
          <div className="flex flex-row gap-2">
            <p>{modalData.index + 1}.</p>
            <p>{modalData.name}</p>
          </div>
        </div>
        <div className="w-full">
          <p className="pb-2">New Task</p>
          <textarea
            name="newName"
            id="newName"
            className="slate-100 px-2 py-1 w-full"
            value={data}
            onChange={(e) => setData(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="w-full flex flex-row justify-center gap-10">
          <button
            className="bg-white w-fit px-3 py-1 rounded-md hover:bg-slate-300 hover:shadow-sm hover:shadow-black border border-black transition-all ease-in-out duration-200"
            onClick={() => handleEdit(modalData.id)}
            disabled={data.length === 0}
          >
            Update
          </button>
          <button
            className="bg-white w-fit px-3 py-1 rounded-md hover:bg-slate-300 hover:shadow-sm hover:shadow-black border border-black transition-all ease-in-out duration-200"
            onClick={() => toggleModal()}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default UpdateModal;
