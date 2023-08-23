import { useContext } from "react";
import { TASKSTATUS } from "../App";

//Main ToolBar Component
function ToolBar() {
  return (
    <div className="h-[15%] w-[95%] overflow-hidden flex flex-row justify-start items-center">
      <CreateTask />
    </div>
  );
}

//New Task Button
function CreateTask() {
  let TaskStatus = useContext(TASKSTATUS);

  return (
    <button
      className="w-40 h-20 mx-2
    bg-green-400 hover:bg-green-300 active:bg-green-500
    border-solid border-2 rounded-xl border-white
    text-white font-bold"
    >
      <p>New</p>
      <p className="text-sm font-normal">
        Currently: {TaskStatus["taskCount"]} tasks
      </p>
    </button>
  );
}

export default ToolBar;
