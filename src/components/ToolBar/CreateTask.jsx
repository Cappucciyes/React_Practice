import CreateTaskForm from "../Forms/CreateTaskForm";
import { TasksContext } from "../_context/_context";
import { useContext, useState } from "react";

//New Task Button
function createTask() {
  let [isFormOpen, setFormOpen] = useState(false);
  let TaskList = useContext(TasksContext);

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
        <p>New</p>
        <p className="font-light">Current: {countTask(TaskList)} tasks</p>
      </button>
    </>
  );
}

//function for counting tasks
function countTask(list) {
  let totalCount = 0;

  for (let day in list) {
    totalCount += list[day].length;
  }

  return totalCount;
}

export default createTask;
