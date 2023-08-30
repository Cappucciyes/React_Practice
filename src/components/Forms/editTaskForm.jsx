import { useContext } from "react";
import { TasksContext } from "../_context/_context";
import { createPortal } from "react-dom";

function EditTaskForm({ key, isOpen, setIsOpen }) {
  console.log("from form:", key);
  let taskList = useContext(TasksContext);
  let targetInfo = findTarget(key, taskList);

  function onSubmit(submitEvent) {
    setIsOpen(!isOpen);

    // submitEvent.preventDefault();
    // let formData = new FormData(submitEvent.target);
  }

  return createPortal(
    <>
      <form action="/" onSubmit={onSubmit} className="bg-white p-10">
        <div className="flex flex-col p-2">
          <p>Select which date: </p>
          <select name="date" id="date" defaultValue={targetInfo.date}>
            <option value="first">Day 1</option>
            <option value="second">Day 2</option>
            <option value="third">Day 3</option>
            <option value="fourth">Day 4</option>
            <option value="fifth">Day 5</option>
          </select>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 
            hover:bg-blue-800 
            focus:ring-4 focus:outline-none focus:ring-blue-300 
            font-medium rounded-lg text-sm 
            w-full px-5 py-2.5 text-center"
        >
          Edit
        </button>
      </form>
    </>,
    document.getElementById("portal")
  );
}

function findTarget(key, obj) {
  for (let day in obj) {
    let taskCountInDay = obj[day].length;

    for (let i = 0; i < taskCountInDay; i++) {
      if (key === obj[day][i]["id"]) {
        return {
          date: day,
          task: obj[day][i],
        };
      }
    }
  }
}

export default EditTaskForm;
