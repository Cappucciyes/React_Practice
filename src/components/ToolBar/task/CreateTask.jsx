import CreateTaskForm from "../../Forms/task/CreateTaskForm";
import { TasksContext } from "../../_context/_taskContext";
import { countTask } from "./utilsForTask";
import { useContext, useState } from "react";

//New Task Button
function createTask() {
  let taskContext = useContext(TasksContext);
  let [isFormOpen, setFormOpen] = useState(false);

  let createForm = isFormOpen ? (
    <CreateTaskForm isFormOpen={isFormOpen} setIsFormOpen={setFormOpen} />
  ) : null;

  return (
    <>
      {createForm}
      <button
        className="w-40 h-20 mx-2
      bg-green-400 hover:bg-green-300 active:bg-green-500
      border-solid border-2 rounded-xl border-white
      text-white font-bold"
        onClick={() => setFormOpen(!isFormOpen)}
      >
        <p>New Task</p>
        <p className="font-light">Current: {countTask(taskContext)} tasks</p>
      </button>
    </>
  );
}

export default createTask;
