import { useContext, useState } from "react";
import EditButton from "../ToolBar/EditButton";
import { TasksContext } from "../_context/_context";

function Task() {
  console.log("loaded");
  let taskList = useContext(TasksContext);

  let result = [];

  for (let day in taskList) {
    if (taskList[day].length < 1) {
      result.push(
        <div className="h-full text-center" key={day}>
          <p>No Tasks for today!</p>
        </div>
      );
    } else {
      let dayTask = taskList[day].map((task) => {
        <li key={task.id}>
          <div className="group relative">
            <p className="py-3">{task.body}</p>

            <div
              className="hidden group-hover:flex flex-col justify-center
                absolute right-0 top-0 bottom-0
                w-min h-full
                "
            >
              <EditButton key={task.id} />
              <button className="bg-red-600">Delete</button>
            </div>
          </div>
        </li>;
      });
      result.push(
        <div className="overflow-y-auto h-full" key={day}>
          <ul className="">{dayTask}</ul>
        </div>
      );
    }
  }

  return <>{result}</>;
}

export default Task;
