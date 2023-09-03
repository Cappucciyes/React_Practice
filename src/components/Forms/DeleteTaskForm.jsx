import { useContext, useState } from "react";
import { TASKSACTION, TasksDispatchContext } from "../_context/_taskContext";
import { createPortal } from "react-dom";

function DeleteTaskForm({ taskInfo, isOpen, setIsOpen }) {
  let [isConfirmed, setConfirm] = useState(false);
  let TaskDispatch = useContext(TasksDispatchContext);

  function closeForm() {
    setIsOpen(!isOpen);
  }

  function deleteTask() {
    TaskDispatch({
      type: TASKSACTION.DELETE,
      targetTask: taskInfo,
    });

    setConfirm(true);
  }

  let AskconfirmPage = (
    <div className="bg-white p-10">
      <p>Do you really want to delete this task?</p>
      <div className="py-2 flex flex-col bg-gray-200 m-2">
        <p>A task from {taskInfo.date} day: </p>
        <p>{taskInfo.task.body}</p>
      </div>
      <button className="bg-red-600 m-2" onClick={deleteTask}>
        Delete
      </button>
      <button className="bg-green-300 m-2" onClick={closeForm}>
        Cancel
      </button>
    </div>
  );
  let completedPage = (
    <div className="bg-white p-10">
      <p>Deletion Completed</p>
      <button>Ok</button>
    </div>
  );

  let body = isConfirmed ? completedPage : AskconfirmPage;

  return createPortal(
    <>
      <div
        className="flex items-center justify-center
      absolute top-0 left-0 right-0 bottom-0
    bg-opacity-75 bg-black"
      >
        {body}
      </div>
    </>,
    document.getElementById("portal")
  );
}

export default DeleteTaskForm;
