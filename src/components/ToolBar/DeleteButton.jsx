import { useContext, useState } from "react";
import { findTask } from "./utilsForTask";
import { TasksContext } from "../_context/_context";
import DeleteTaskForm from "../Forms/DeleteTaskForm";

function DeleteButton({ taskKey }) {
  let taskList = useContext(TasksContext);
  let [isOpen, setIsOpen] = useState(false);
  let targetTaskInfo = findTask(taskList, taskKey);

  let deleteForm = isOpen ? (
    <DeleteTaskForm
      taskInfo={targetTaskInfo}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    />
  ) : null;
  return (
    <>
      {deleteForm}
      <button className="bg-red-600" onClick={() => setIsOpen(true)}>
        Delete
      </button>
    </>
  );
}

export default DeleteButton;
