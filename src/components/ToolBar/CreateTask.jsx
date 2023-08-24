import { TasksDispatchContext, TASKSACTION } from "../_context/_context";
import { useContext, useEffect } from "react";

//New Task Button
function CreateTask() {
  let TaskDispatch = useContext(TasksDispatchContext);

  return (
    <button
      className="w-40 h-20 mx-2
      bg-green-400 hover:bg-green-300 active:bg-green-500
      border-solid border-2 rounded-xl border-white
      text-white font-bold"
      onClick={() => TaskDispatch({ type: TASKSACTION.CREATE })}
    >
      <p>New</p>
    </button>
  );
}

export default CreateTask;
