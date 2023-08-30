import EditTaskForm from "../Forms/EditTaskForm";
import { TasksContext } from "../_context/_context";
import { findTask } from "./utilsForTask";
import { useState, useContext } from "react";

function EditButton({ taskKey }) {
  let [isOpen, setIsOpen] = useState(false);
  let taskList = useContext(TasksContext);
  let targetTaskInfo = findTask(taskList, taskKey);

  let editForm = isOpen ? (
    <EditTaskForm
      taskInfo={targetTaskInfo}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    />
  ) : null;
  return (
    <>
      {editForm}
      <button className="bg-blue-400" onClick={() => setIsOpen(true)}>
        Edit
      </button>
    </>
  );
}

export default EditButton;
