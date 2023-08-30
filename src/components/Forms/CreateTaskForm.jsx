import { useContext } from "react";
import { TASKSACTION, TasksDispatchContext } from "../_context/_context";
import { createPortal } from "react-dom";

function createTaskForm({ isFormOpen, setIsFormOpen }) {
  let TaskDispatch = useContext(TasksDispatchContext);

  function handleSubmit(submitEvent) {
    // Prevent the browser from reloading the page
    submitEvent.preventDefault();
    let formData = new FormData(submitEvent.target); // Read the form data

    let formObject = Object.fromEntries(formData.entries()); //Change read data to a plain object:

    let newTaskInfo = {
      date: formObject.date,
      newtask: {
        id: Date.now(),
        body: formObject.body,
      },
    };

    TaskDispatch({
      type: TASKSACTION.CREATE,
      newTaskInfo: newTaskInfo,
    });

    setIsFormOpen(!isFormOpen);
  }

  return createPortal(
    <>
      <div
        className="flex items-center justify-center
        absolute top-0 left-0 right-0 bottom-0
      bg-opacity-75 bg-black"
      >
        <form onSubmit={handleSubmit} className="bg-white p-10">
          <div className="flex flex-col p-2">
            <p>Select which date: </p>
            <select name="date" id="date" required>
              <option value="first">Day 1</option>
              <option value="second">Day 2</option>
              <option value="third">Day 3</option>
              <option value="fourth">Day 4</option>
              <option value="fifth">Day 5</option>
            </select>
          </div>

          <div className="flex flex-col p-2" required>
            <p>Write the task out: </p>
            <input type="text" name="body" id="body" />
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 
            hover:bg-blue-800 
            focus:ring-4 focus:outline-none focus:ring-blue-300 
            font-medium rounded-lg text-sm 
            w-full px-5 py-2.5 text-center"
          >
            Submit
          </button>
        </form>
      </div>
    </>,
    document.getElementById("portal")
  );
}

export default createTaskForm;
