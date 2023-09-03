import { useContext } from "react";
import { TASKSACTION, TasksDispatchContext } from "../_context/_taskContext";
import { createPortal } from "react-dom";

function EditTaskForm({ taskInfo, isOpen, setIsOpen }) {
  let TaskDispatch = useContext(TasksDispatchContext);

  function onSubmit(submitEvent) {
    submitEvent.preventDefault();
    let formData = new FormData(submitEvent.target);

    let formObject = Object.fromEntries(formData.entries());

    let updateInfo = {
      oldDate: taskInfo.date,
      newDate: formObject.date,
      updatedTask: {
        id: taskInfo.task.id,
        body: formObject.body,
      },
    };

    TaskDispatch({
      type: TASKSACTION.EDIT,
      updateInfo: updateInfo,
    });

    setIsOpen(!isOpen);
  }

  return createPortal(
    <>
      <div
        className="flex items-center justify-center
        absolute top-0 left-0 right-0 bottom-0
      bg-opacity-75 bg-black"
      >
        <form action="/" onSubmit={onSubmit} className="bg-white p-10">
          <div className="flex flex-col p-2">
            <p>Select which date: </p>
            <select name="date" id="date" defaultValue={taskInfo.date}>
              <option value="first">Day 1</option>
              <option value="second">Day 2</option>
              <option value="third">Day 3</option>
              <option value="fourth">Day 4</option>
              <option value="fifth">Day 5</option>
            </select>
          </div>

          <div className="flex flex-col p-2" required>
            <p>Edit task: </p>
            <input
              type="text"
              name="body"
              id="body"
              defaultValue={taskInfo.task.body}
            />
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
      </div>
    </>,
    document.getElementById("portal")
  );
}

export default EditTaskForm;
